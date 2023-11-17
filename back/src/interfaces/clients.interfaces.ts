import { z } from "zod";
import { newClientSchema, responseClientSchema, updateClientSchema } from "../schemas/client.schemas";
import { DeepPartial } from "typeorm";

export type TNewClient = z.infer<typeof newClientSchema>
export type TUpdateClient = DeepPartial<TNewClient>
export type TResponseClient = z.infer<typeof responseClientSchema>