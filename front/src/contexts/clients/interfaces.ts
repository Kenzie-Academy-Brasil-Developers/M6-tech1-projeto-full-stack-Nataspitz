import { TFormLoginSchema } from "@/components/forms/login/schemaFormLogin";
import { TRegisterFormSchema } from "@/components/forms/register/schemaRegister";
import { z } from "zod";


export interface IClientsContext {
    registerClient: (form: TRegisterFormSchema) => Promise<void>;
    loginRender: boolean;
    setLoginRender: React.Dispatch<React.SetStateAction<boolean>>;
    loginClient: (form: TFormLoginSchema) => Promise<void>;
    updateClient: (form: IUpdateClient) => Promise<void>;
    deleteClient: () => Promise<void>;
    client: IClient | null;
}

export interface IClient {
    id: string;
    fullName: string;
    email: string;
    phone: string;
}

export interface IUpdateClient {
    fullName?: string | undefined;
    email?: string | undefined;
    phone?: string | undefined;
    password?: string | undefined;
}