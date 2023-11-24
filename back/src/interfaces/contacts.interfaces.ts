import { z } from "zod";
import { contactSchema, newContactSchema, newEmailContactSchema, updateContactSchema } from "../schemas/contacts.schemas";
import { DeepPartial } from "typeorm";


export type TNewContact = z.infer<typeof newContactSchema>
export type TContactResponse = z.infer<typeof contactSchema>
export type TUpdateContact = DeepPartial<typeof updateContactSchema>

export type TNewEmailContact = z.infer<typeof newEmailContactSchema>

