"use client"
import { createContext, useState} from "react"
import { api } from "../../../service/api"
import { useRouter } from "next/navigation"
import { toast } from "react-toastify"
import { TRegisterFormSchema } from "@/components/forms/registerClientsForm/schemaRegister"
import { IClient, IClientsContext, IUpdateClient } from "./interfaces"
import { TFormLoginSchema } from "@/components/forms/loginForm/schemaFormLogin"
import { Route } from "react-router-dom"


export const ClientsContext = createContext<IClientsContext>(
    {} as IClientsContext
)

export function ClientsProvider({ children }: {children: React.ReactNode }) {   
    const [loginRender, setLoginRender] = useState(false)
    const [client, setClient] = useState<IClient | null>(null)

    const token = typeof window !== 'undefined' ? localStorage.getItem("@TOKEN") : null;
    const clientId = typeof window !== 'undefined' ? localStorage.getItem("@USERID") : null;
    
    const route = useRouter()

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
            setClient(data)
          
            localStorage.setItem("@USERID", clientId)
            localStorage.setItem("@TOKEN", data.token)
            route.push("/clients")
        } catch (error) {
            toast.error("Senha ou email incorretos!")
            console.log(error, "error");
            
        }
    }

    const updateClient = async (form: IUpdateClient) => {
        try {
            const { data } = await api.patch(`/clients/${clientId}`, form, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setClient(data)
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
        deleteClient,
        client
      }

    return (
        <ClientsContext.Provider value={contextValue}>
            {children}
        </ClientsContext.Provider>
    )
}