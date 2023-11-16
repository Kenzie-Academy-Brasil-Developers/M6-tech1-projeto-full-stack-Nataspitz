import { Client } from "../../entities/client.entity";
import { Contact } from "../../entities/contacts.entity";
import { EmailContact } from "../../entities/emailContact.entity";

describe("Contact Entity", () => {
  test("Contact should belong to a client and have many email contacts", () => {
    const client = new Client();
    const contact = new Contact();
    const emailContact1 = new EmailContact();
    const emailContact2 = new EmailContact();
    
    contact.client = client;
    contact.emailContacts = [emailContact1, emailContact2];

    expect(contact.client).toBeInstanceOf(Client);
    expect(contact.emailContacts).toHaveLength(2);
    expect(contact.emailContacts[0]).toBeInstanceOf(EmailContact);
    expect(contact.emailContacts[1]).toBeInstanceOf(EmailContact);
  });
});