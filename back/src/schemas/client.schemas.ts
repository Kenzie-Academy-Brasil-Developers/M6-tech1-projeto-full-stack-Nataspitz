import { z } from "zod";

export const clientSchema = z.object({
    id: z.string().uuid(),
    fullName: z.string(),
    email: z.string().email(),
    password: z.string(),
    phone: z.string(),
    createdAt: z.date()
})

export const newClientSchema = clientSchema.omit({ id: true, createdAt: true }) 
export const loginClientSchema = clientSchema.pick({ email: true, password: true }) 
export const responseClientSchema = clientSchema.omit({ password: true })
export const updateClientSchema = responseClientSchema.partial()
export const responseSchema = z.array(responseClientSchema)
