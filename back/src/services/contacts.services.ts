import { contactSchema, updateContactSchema } from './../schemas/contacts.schemas';
import { TContactResponse, TNewContact, TUpdateContact } from "../interfaces/contacts.interfaces";
import { TNewEmailContact } from '../interfaces/emailContacts.interface';
import { contactsRepo, emailContactRepo } from "../repositories";
import { Contact } from '../entities/contacts.entity';
import { ILike } from 'typeorm';


export class ContactServices{
    async create (payload: TNewContact, clientId: string): Promise<TContactResponse> {
        const { name, emails, phone, } = payload

        const newContact = contactsRepo.create({
            name,
            phone,
            client: { id: clientId }
        })
        await contactsRepo.save(newContact)

        const createdEmails = await Promise.all(emails.map(async (emailPayload: TNewEmailContact) => {
            const { email } = emailPayload

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

    async getAll(clientId: string, name?: string) {
        let whereConditions: any = {
            client: { id: clientId }
        }
        
        if (name) {
            whereConditions.name = ILike(`%${name}%`);
          }
        
          const contacts = await contactsRepo.find({
            where: whereConditions,
            relations: {
                emailContacts: true
            }
          });

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
        const contactWithEmails = await contactsRepo.findOneOrFail({
            where: {
                id: contact.id
            },
            relations: {
                emailContacts: true
            }
        })
        const { emailContacts } = contactWithEmails

        if (emailContacts) {
            await emailContactRepo.remove(emailContacts)
        }

        await contactsRepo.remove(contact)
    }
}