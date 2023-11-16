import { Column, PrimaryGeneratedColumn } from "typeorm"

export class Contact{
    @PrimaryGeneratedColumn("uuid")
    id: number

    @Column({unique: true})
    name: string

    @Column({unique: true})
    email: string

    @Column({unique: true})
    phone: string

    @Column()
    createdAt: Date
    setCreatedAt(){
        this.createdAt = new Date()
    }
}