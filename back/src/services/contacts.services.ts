import { contactSchema, updateContactSchema } from './../schemas/contacts.schemas';
import { TContactResponse, TNewContact, TUpdateContact } from "../interfaces/contacts.interfaces";
import { TNewEmailContact } from '../interfaces/emailContacts.interface';
import { contactsRepo, emailContactRepo } from "../repositories";
import { AppError } from '../errors/AppError';
import { Contact } from '../entities/contacts.entity';


export class ContactServices{
    async create (payload: TNewContact, clientId: string): Promise<TContactResponse> {
        const { name, emails, phone, } = payload

        const phoneExists = await contactsRepo.findOneBy({
            phone: phone
        })
        
        if (phoneExists) {
            throw new AppError("Phone already registered", 409)
        }

        const newContact = contactsRepo.create({
            name,
            phone,
            client: { id: clientId }
        })
        await contactsRepo.save(newContact)

        const createdEmails = await Promise.all(emails.map(async (emailPayload: TNewEmailContact) => {
            const { email } = emailPayload

            const emailExists = await emailContactRepo.findOneBy({
                email
            })

            if (emailExists) throw new AppError("Email already registered", 409)

            const createdEmail = emailContactRepo.create({
                email,
                contact: newContact
            })

            await emailContactRepo.save(createdEmail)

            return createdEmail
        }))

        newContact.emailContacts = createdEmails
        await contactsRepo.save(newContact)
        const response = {
            ...newContact,
            emails: createdEmails
        }
        return contactSchema.parse(response)
    }

    async getAll(clientId: string) {    
        const contacts = await contactsRepo.find({
            where: {
                client: { id: clientId }
            }
        })

        return contacts

    }

    async getById (contact: Contact, clientId: string) {
        const findContact = await contactsRepo.findOne({
            where: {
                id: contact.id,
                client: { id: clientId }
            },
            relations: {
                emailContacts: true
            }
        })

        return findContact
    }

    async update (contact: Contact, payload: TUpdateContact) {


        const updateContact = contactsRepo.create({
            ...contact,
            ...payload
        })

        return await contactsRepo.save(updateContact)
    }

    async delete (contact: Contact) {
        const emails = await emailContactRepo.find({
            where: {
                contact: contact.emailContacts
            }
        })

        if (emails) {
            await emailContactRepo.remove(emails)
        }

        await contactsRepo.remove(contact)
    }
}