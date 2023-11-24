import { z } from "zod";

const emailContactSchema = z.object({
  id: z.string().uuid(),
  email: z.string().email(),
});

export const contactSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  phone: z.string(),
  createdAt: z.date(),
  emails: z.array(emailContactSchema),
})

export const newEmailContactSchema = emailContactSchema.omit({ id: true });
export const newContactSchema = contactSchema
  .omit({ id: true, createdAt: true, emails: true })
  .extend({
    emails: z.array(newEmailContactSchema),
  })

export const updateContactSchema = contactSchema.omit({ id: true, createdAt: true, emails: true }).partial()