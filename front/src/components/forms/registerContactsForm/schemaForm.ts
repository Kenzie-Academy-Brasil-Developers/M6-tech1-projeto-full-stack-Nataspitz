import { z } from "zod";

export const schemaContact = z.object({
    name: z.string().nonempty("Nome obrigatório"),
    phone: z.string()
        .refine((value) => value.length === 11, "Forneça um telefone válido"),
    emails: z.array(
        z.object({
            email: z.string().email("Email inválido").nonempty("Email obrigatório"),
        })
    ).nonempty("Email obrigatório"),
})

export type TContactSchema = z.infer<typeof schemaContact>
