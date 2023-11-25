import { BeforeInsert, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Client } from "./client.entity";
import { EmailContact } from "./emailContact.entity";

@Entity()
export class Contact {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ length: 50, unique: true })
    name: string;

    @Column({ length: 11})
    phone: string;

    @Column()
    createdAt: Date;

    @BeforeInsert()
    setCreatedAt() {
        this.createdAt = new Date();
    }

    @ManyToOne(() => Client, client => client.contacts)
    client: Client;

    @OneToMany(() => EmailContact, emailContact => emailContact.contact, { cascade: true, onDelete: "CASCADE" })
    emailContacts: EmailContact[];
}
