import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Client } from "./client.entity"
import { EmailContact } from "./emailContact.entity"

@Entity()
export class Contact{
    @PrimaryGeneratedColumn("uuid")
    id: number

    @Column({unique: true})
    name: string

    @Column({unique: true})
    phone: string

    @Column()
    createdAt: Date
    setCreatedAt(){
        this.createdAt = new Date()
    }

    @ManyToOne(() => Client, client => client.contacts)
    client: Client

    @OneToMany(() => EmailContact, emailContact => emailContact.contact)
    emailContacts: EmailContact[]
}