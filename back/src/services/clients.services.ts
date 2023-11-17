import { clientRepo } from './../repositories';
import { AppError } from "../errors/AppError";
import { TNewClient, TResponseClient, TUpdateClient } from "../interfaces/clients.interfaces";
import { hash } from 'bcryptjs'
import { responseClientSchema, updateClientSchema } from "../schemas/client.schemas";
import { Client } from '../entities/client.entity';


export class ClientServices{
    async create(payload: TNewClient): Promise<TResponseClient> {
        const { fullName, email, password, phone } = payload

        const client: TResponseClient | null = await clientRepo.findOne({
            where: {
                email, 
                phone
            }
        })

        if (client) throw new AppError("Client already exists", 409)
        const hashPassword = await hash(password, 10)

        const newClient = clientRepo.create({
            fullName, 
            email, 
            password: hashPassword, 
            phone
        })

        await clientRepo.save(newClient)
        return responseClientSchema.parse(newClient)
    }

    async update( currentClient: TUpdateClient,  payload: TUpdateClient, ) {
        
        const updateClient = clientRepo.create({
            ...currentClient,
            ...payload
        })

        await clientRepo.save(updateClient)
        return updateClientSchema.parse(updateClient)
    }

    async delete (client: Client): Promise<void> {
        await clientRepo.remove(client)
    }
}