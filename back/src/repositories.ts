import { EmailContact } from './entities/emailContact.entity';
import { AppDataSource } from "./data-source";
import { Client } from "./entities/client.entity";
import { Contact } from "./entities/contacts.entity";

export const clientRepo = AppDataSource.getRepository(Client)
export const contactsRepo = AppDataSource.getRepository(Contact)
export const emailContactRepo = AppDataSource.getRepository(EmailContact)