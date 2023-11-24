import { z } from "zod";
import { DeepPartial } from "typeorm";
import { emailContactSchema, newEmailContactSchema } from "../schemas/emailContacts.schemas";

export type TNewEmailContact = z.infer<typeof newEmailContactSchema>
export type TEmailContactResponse = z.infer<typeof emailContactSchema>
export type TUpdateEmailContact = DeepPartial<typeof newEmailContactSchema>