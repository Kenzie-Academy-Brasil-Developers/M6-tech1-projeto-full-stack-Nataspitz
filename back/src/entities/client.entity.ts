import { BeforeInsert, Column, PrimaryGeneratedColumn } from "typeorm"

export class Client{
    @PrimaryGeneratedColumn("uuid")
    id: number

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
}