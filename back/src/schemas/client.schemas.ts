import { z } from "zod";

export const clientSchema = z.object({
    id: z.number(),
    fullName: z.string(),
    email: z.string().email(),
    password: z.string(),
    phone: z.string(),
    createdAt: z.date()
})

export const newClientSchema = clientSchema.omit({ id: true, createdAt: true }) 
export const updateClientSchema = newClientSchema.partial()
export const responseClientSchema = clientSchema.omit({ password: true })
export const responseSchema = z.array(responseClientSchema)
