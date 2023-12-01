import { z } from 'zod';


export const registerFormRegisterSchema = z.object({
    fullName: z
    .string()
    .min(7,"Seu nome no minimo deve ter 7 caracteres"),
    email: z
    .string()
    .email("Forneca um email vádido"),
    phone: z
    .string()
    .refine((value) => value.length === 11, "Forneca um telefone válido"),
    password: z
    .string()
    .min(8,"Senha precisa ter pelo menos 8 caracteres sendo maiúsculas, minúsculas, numeros e caracteres especiais")
    .regex(/(?=.*?[A-Z])/, "Deve conter pelo menos uma letra maiúscula")
    .regex(/(?=.*?[a-z])/, "Deve conter pelo menos uma letra minúscula")
    .regex(/(?=.*?[0-9])/, "Deve conter pelo menos um número")
    .regex(/(?=.*?[#?!@$%^&*-])/, "Deve conter elo menos um caracter especial (@,#,$,&...)"),
    confirm_password: z
    .string()
    .min(1, "Você precisa confirmar a senha"),
}).refine(({ password, confirm_password }) => password === confirm_password, {
    message: "As senhas precisam ser iguais",
    path: ["confirm_password"],
})

export type TRegisterFormSchema = z.infer<typeof registerFormRegisterSchema> 