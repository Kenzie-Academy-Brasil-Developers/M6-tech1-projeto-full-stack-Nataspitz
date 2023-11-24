import { Request, Response } from 'express';
import { ClientServices } from './../services/clients.services';


export class ClientsController{
    constructor( private clientServices: ClientServices){}
    
    async create(req: Request, res: Response) {
        const { fullName, email, phone, password } = req.body

        const newClient = await this.clientServices.create({
            fullName,
            email,
            phone,
            password
        })
        return res.status(201).json(newClient)
    }

    async login (req: Request, res: Response) {
        const { email, password } = req.body

        const client = await this.clientServices.login({
            email,
            password
        })
        return res.status(200).json(client)
    }

    async update(req: Request, res: Response) {
        const { client } = res.locals
        
        const updatedClient = await this.clientServices.update(
            client,
            req.body
        )

        return res.status(200).json(updatedClient)
    }

    async delete(req: Request, res: Response){
        const { client } = res.locals
        await this.clientServices.delete(client)

        return res.status(204).send()
    }
    
}