import { ClientServices } from "../services/clients.services";
import { ContactServices } from "../services/contacts.services";
import { EmailContactServices } from "../services/emailContacts.services";
import { ClientsController } from "./clients.controller";
import { ContactController } from "./contacts.controller";
import { EmailComtactController } from "./emailContacts.controller";


export const clientService = new ClientServices()
export const clientsController = new ClientsController(clientService)

export const contactService = new ContactServices()
export const contactController = new ContactController(contactService)

export const emailContactService = new EmailContactServices()
export const emailContactController = new EmailComtactController(emailContactService)