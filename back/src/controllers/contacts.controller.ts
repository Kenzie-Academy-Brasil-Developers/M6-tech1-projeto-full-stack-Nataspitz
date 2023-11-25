import { Contact } from './../entities/contacts.entity';
import { Request, Response } from "express";
import { ContactServices } from "../services/contacts.services";


export class ContactController {
    constructor(private contactService: ContactServices) {}

    async create (req: Request, res: Response) {
        const { sub } = res.locals.decoded

        const newContact = await this.contactService.create(req.body, sub)

        return res.status(201).json(newContact)
    }

    async getAll (req: Request, res: Response) {
        const { sub } = res.locals.decoded
        const name = req.query.name as string | undefined

        const contacts = await this.contactService.getAll(sub, name)
        return res.status(200).json(contacts)        
    }

    async getById (req: Request, res: Response) {
        const { contact } = res.locals
        const { sub } = res.locals.decoded        

        const findContact = await this.contactService.getById(contact, sub)
        return res.status(200).json(findContact)
    }

    async update (req: Request, res: Response) {
        const { contact } = res.locals
        
        const updatedContact = await this.contactService.update(contact, req.body)
        return res.status(200).json(updatedContact)
    }

    async delete (req: Request, res: Response) {
        const { contact } = res.locals
        
        await this.contactService.delete(contact)
        return res.status(204).send()
    }
}