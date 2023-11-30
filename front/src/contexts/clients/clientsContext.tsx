"use client"
import { createContext, useState} from "react"
import { api } from "../../../service/api"
import { useRouter } from "next/router"
import { toast } from "react-toastify"
import { TRegisterFormSchema } from "@/components/forms/register/schemaRegister"
import { IClientsContext, IUpdateClient } from "./interfaces"
import { TFormLoginSchema } from "@/components/forms/login/schemaFormLogin"


export const ClientsContext = createContext<IClientsContext>(
    {} as IClientsContext
)

export function ClientsProvider({ children }: {children: React.ReactNode }) {   
    const [loginRender, setLoginRender] = useState(false)

    const token = localStorage.getItem("@TOKEN")
    const clientId = localStorage.getItem("@USERID")


    const registerClient = async (form: TRegisterFormSchema) => {
        try {
            await api.post("/clients", form)
            toast.success("Sua conta foi criada!")
            setLoginRender(true)    
        } catch (error) {
            toast.error("Dados já cadatrados, tente novamente!")
            console.log(error);
            
        }
    }

    const loginClient = async (form: TFormLoginSchema) => {
        try {
            const { data } = await api.post("/clients/login", form)
            const clientId = data.id
            localStorage.setItem("@USERID", clientId)
            localStorage.setItem("@TOKEN", data.token)
        } catch (error) {
            toast.error("Senha ou email incorretos!")
            console.log(error, "error");
            
        }
    }

    const updateClient = async (form: IUpdateClient) => {
        try {
            await api.patch(`/clients/${clientId}`, form, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            toast.success("Dados atualizados!")
        } catch (error) {
            toast.error("Ops algo deu errado, tente novamente!")
        }
    }

    const deleteClient = async () => {
        try {
            await api.delete(`/clients/${clientId}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            toast.success("Conta deletada!")
        } catch (error) {
            toast.error("Ops algo deu errado, tente novamente!")
        }
    }

    const contextValue: IClientsContext = {
        loginRender,
        setLoginRender,
        registerClient,
        loginClient,
        updateClient,
        deleteClient
      }

    return (
        <ClientsContext.Provider value={contextValue}>
            {children}
        </ClientsContext.Provider>
    )
}