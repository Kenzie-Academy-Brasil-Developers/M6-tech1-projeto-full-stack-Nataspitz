import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Contact } from "./contacts.entity";

@Entity()
export class EmailContact{
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    email: string

    @ManyToOne(type => Contact, contact => contact.emailContacts)
    contact: Contact
}