import { z } from "zod";


export const emailContactSchema = z.object({
    id: z.string().uuid(),
    email: z.string().email(),
  })

export const newEmailContactSchema = emailContactSchema.omit({ id: true })
export const updateEmailContactSchema = newEmailContactSchema.partial()