import { BeforeInsert, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Contact } from "./contacts.entity"

@Entity()
export class Client{
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({length: 30})
    fullName: string

    @Column({unique: true})
    email: string

    @Column({length: 15})
    password: string

    @Column({length: 11, unique: true})
    phone: string

    @Column()
    createdAt: Date

    @BeforeInsert()
    setCreatedAt(){
        this.createdAt = new Date()
    }

    @OneToMany(() => Contact, contact => contact.client)
    contacts: Contact[]
}