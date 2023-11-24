import { BeforeInsert, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Contact } from "./contacts.entity";

@Entity()
export class Client {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ length: 50 })
    fullName: string;

    @Column({ unique: true })
    email: string;

    @Column({ length: 150 })
    password: string;

    @Column({ length: 11, unique: true })
    phone: string;

    @Column()
    createdAt: Date;

    @OneToMany(() => Contact, contact => contact.client, { cascade: true, onDelete: "CASCADE" }) 
    contacts: Contact[];

    @BeforeInsert()
    setCreatedAt() {
        this.createdAt = new Date();
    }
}
