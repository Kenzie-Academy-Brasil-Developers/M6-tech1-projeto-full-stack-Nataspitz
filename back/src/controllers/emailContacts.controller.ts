import { Request, Response } from "express";
import { EmailContactServices } from "../services/emailContacts.services";


export class EmailComtactController {
    constructor(private contactService: EmailContactServices){}

    async create (req: Request, res: Response) {
        const { email } = req.body
        const { contact } = res.locals
        
        const newEmail = await this.contactService.create(email, contact)
        return res.status(201).json(newEmail)
    }

    async update (req: Request, res: Response) {
        const { email } = res.locals        

        const updatedEmail = await this.contactService.update(email, req.body)
        return res.status(200).json(updatedEmail)
    }

    async delete (req: Request, res: Response) {
        const { email } = res.locals 

        await this.contactService.delete(email)
        return res.status(204).send()
    }
}