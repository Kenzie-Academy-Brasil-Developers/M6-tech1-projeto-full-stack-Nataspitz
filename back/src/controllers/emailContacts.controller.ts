import { Request, Response } from "express";
import { EmailContactServices } from "../services/emailContact.services";


export class EmailComtactController {
    constructor(private contactService: EmailContactServices){}

    async create (req: Request, res: Response) {
        const { email } = req.body
        const { id } = req.params

        const newEmail = await this.contactService.create(email, id)

        return res.status(201).json(newEmail)
    }
}