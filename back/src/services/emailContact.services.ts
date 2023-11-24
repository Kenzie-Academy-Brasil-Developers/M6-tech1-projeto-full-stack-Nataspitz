import { contactsRepo, emailContactRepo } from './../repositories';
import { DeepPartial } from "typeorm";
import { TNewEmailContact } from "../interfaces/contacts.interfaces";
import { newEmailContactSchema } from "../schemas/contacts.schemas";
import { EmailContact } from "../entities/emailContact.entity";
import { AppError } from "../errors/AppError";


export class EmailContactServices {
    async create(emailPayload: { email: string }, idContact: string) {
        const { email } = emailPayload;
        const contact = await contactsRepo.findOneBy({ id: idContact });

        if (!contact) {
            throw new AppError("Contact not found", 404);
        }

        const newEmailContact = emailContactRepo.create({
            email: email,
            contact: {
                id: idContact
            }
        })

        const createdEmail = await emailContactRepo.save(newEmailContact);

        return newEmailContactSchema.parse(createdEmail);
    }
}

