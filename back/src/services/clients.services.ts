import { clientRepo, contactsRepo, emailContactRepo } from './../repositories';
import { AppError } from "../errors/AppError";
import { IclientLoginResponse, TLoginClient, TNewClient, TResponseClient, TUpdateClient } from "../interfaces/clients.interfaces";
import { compare, hash } from 'bcryptjs'
import { responseClientSchema, updateClientSchema } from "../schemas/client.schemas";
import { Client } from '../entities/client.entity';
import { sign } from 'jsonwebtoken';


export class ClientServices{
    async create(payload: TNewClient): Promise<TResponseClient> {
        const { fullName, email, password, phone } = payload

        const clientEmail: TResponseClient | null = await clientRepo.findOneBy({email})
        const clientPhone: TResponseClient | null = await clientRepo.findOneBy({phone})

        if (clientEmail) throw new AppError("Client already exists", 409)
        if (clientPhone) throw new AppError("Client already exists", 409)

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

    async login (payload: TLoginClient): Promise<IclientLoginResponse> {
        const { email, password } = payload

        const client = await clientRepo.findOne({
            where: {
                email
            }
        })
        if (!client) throw new AppError("Incorrect email or password", 401)

        const passwordMatch = await compare(password, client.password)
        if (!passwordMatch) throw new AppError("Incorrect email or password", 401)

        const token = sign(
            {clientName: client.fullName},
            process.env.SECRET_KEY!,
            {
                subject: client.id,
                expiresIn: '24h'
            }
        )

        const clientResponse = {
            id: client.id,
            fullName: client.fullName,
            email: client.email,
            phone: client.phone,
            token
        }
        return clientResponse
        
    }

    async update( currentClient: Client,  payload: TUpdateClient, ) {
        
        const updateClient = clientRepo.create({
            ...currentClient,
            ...payload,
        })

        await clientRepo.save(updateClient)
        return updateClientSchema.parse(updateClient)
    }

    async delete(client: Client) {
        const contacts = await contactsRepo.find({
            where: {
                client: {
                    id: client.id
                }
            }
        })

        for (const contact of contacts) {
            await emailContactRepo.delete({
              contact: {
                id: contact.id,
              },
            })
          }

        if (contacts) {
            await contactsRepo.remove(contacts)
        }
        await clientRepo.remove(client);
    }
}