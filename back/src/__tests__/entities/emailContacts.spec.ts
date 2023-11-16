import { Contact } from "../../entities/contacts.entity";
import { EmailContact } from "../../entities/emailContact.entity";

describe("EmailContact Entity", () => {
  test("EmailContact should belong to a contact", () => {
    const contact = new Contact();
    const emailContact = new EmailContact();
    
    emailContact.contact = contact;

    expect(emailContact.contact).toBeInstanceOf(Contact);
  });
});