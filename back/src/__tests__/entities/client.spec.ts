import { Client } from "../../entities/client.entity";
import { Contact } from "../../entities/contacts.entity";

describe("Client Entity", () => {
  test("Client should have many contacts", () => {
    const client = new Client();
    const contact1 = new Contact();
    const contact2 = new Contact();
    
    client.contacts = [contact1, contact2];

    expect(client.contacts).toHaveLength(2);
    expect(client.contacts[0]).toBeInstanceOf(Contact);
    expect(client.contacts[1]).toBeInstanceOf(Contact);
  });
});