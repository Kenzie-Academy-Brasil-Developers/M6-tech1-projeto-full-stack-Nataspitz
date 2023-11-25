import { TEmailContactResponse } from './../interfaces/emailContacts.interface';
import { emailContactRepo } from '../repositories';
import { TUpdateEmailContact } from '../interfaces/emailContacts.interface';
import { Contact } from '../entities/contacts.entity';
import { emailContactSchema } from '../schemas/emailContacts.schemas';
import { EmailContact } from '../entities/emailContact.entity';


export class EmailContactServices {
    async create(email: string, contact: Contact): Promise<TEmailContactResponse> {
        const newEmailContact = emailContactRepo.create({
            email,
            contact: {
                id: contact.id
            }
        })

        const createdEmail = await emailContactRepo.save(newEmailContact);
        return emailContactSchema.parse(createdEmail)
    }

    async update (currentEmail: EmailContact, payload: TUpdateEmailContact): Promise<TEmailContactResponse> {

        const updateEmail = emailContactRepo.create({
            ...currentEmail,
            ...payload
        })

        const newEmail = await emailContactRepo.save(updateEmail)
        return newEmail
    }

    async delete (email: EmailContact): Promise<void> {
        await emailContactRepo.remove(email)
    }
}

