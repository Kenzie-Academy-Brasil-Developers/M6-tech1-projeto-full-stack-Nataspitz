import { createContext, useState } from "react";
import { api } from "../../../service/api";
import { IContactContext, ICreateContact, IListContacts, IUpdateContact, IUpdateEmailContact } from "./interfaces";
import { toast } from "react-toastify";


export const ContactsContext = createContext(
    {} as IContactContext
)

export function ContactsProvider({ children }: { children: React.ReactNode }) {
    const [contactsRender, setContactsRender] = useState<IListContacts[]>([])

    const token = localStorage.getItem("@TOKEN")

    const registerContact = async (form: ICreateContact) =>{
        try {
            await api.post("/contacts", form), {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
            toast.success("Contato criado com sucesso")
        } catch (error) {
            toast.error("Esse contato já foi cadastrado")
        }
    }

    const listContacts = async () =>{
        try {
            const { data } = await api.get("/contacts", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setContactsRender(data)
        } catch (error) {
            toast.error("Não foi possivel listar os contatos")
        }
    }

    const updateContact = async (contactId: string, form: IUpdateContact) =>{
        try {
            await api.patch(`/contacts/${contactId}`, form), {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        } catch (error) {
            toast.error("Esse contato não pode ser atualizado")
        }
    }

    const updateEmail = async (emailId: string,form: IUpdateEmailContact) =>{
        try {
            await api.patch(`/emails/${emailId}`, form), {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
            toast.success("Email atualizado com sucesso")  
        } catch (error) {
            toast.error("Esse email não pode ser atualizado")
        }
    }

    const deleteContact = async (contactId: string) =>{
        try {
            await api.delete(`/contacts/${contactId}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            toast.success("Contato deletado com sucesso")
        } catch (error) {
            toast.error("Esse contato não Existe")
        }
    }

    const deleteEmail = async (emailId: string) =>{
        try {
            await api.delete(`/emails/${emailId}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            toast.success("Email deletado com sucesso")
        } catch (error) {
            toast.error("Esse email não Existe")
        }
    }

    const contextValue ={
        registerContact,
        listContacts,
        updateContact,
        updateEmail,
        contactsRender,
        deleteContact,
        deleteEmail
    }

    return (
        <ContactsContext.Provider value={contextValue}>
            {children}	
        </ContactsContext.Provider>
    )
}