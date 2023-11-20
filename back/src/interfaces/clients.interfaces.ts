import { z } from "zod";
import { loginClientSchema, newClientSchema, responseClientSchema, updateClientSchema } from "../schemas/client.schemas";
import { DeepPartial } from "typeorm";

export type TNewClient = z.infer<typeof newClientSchema>
export type TLoginClient = z.infer<typeof loginClientSchema>
export type TUpdateClient = DeepPartial<TNewClient>
export type TResponseClient = z.infer<typeof responseClientSchema>

export interface IclientLoginResponse{
    id: string,
    fullName: string,
    token: string
}