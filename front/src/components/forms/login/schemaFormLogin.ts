import { z } from "zod";


export const formLoginSchema = z.object({
    email: z.string().nonempty("O email deve ser preenchido"),
    password: z.string().nonempty("A senha deve ser preenchida"),
})

export type TFormLoginSchema = z.infer<typeof formLoginSchema>