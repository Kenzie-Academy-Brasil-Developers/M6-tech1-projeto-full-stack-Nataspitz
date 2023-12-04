import { createContext, useState } from "react";
import { api } from "../../../service/api";
import { IContactContext, ICreateContact, IListContacts, IUpdateContact, IUpdateEmailContact } from "./interfaces";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";


export const ContactsContext = createContext(
    {} as IContactContext
)

export function ContactsProvider({ children }: { children: React.ReactNode }) {
    const [contactsRender, setContactsRender] = useState<IListContacts[]>([])
    const router = useRouter()
    
    const token = typeof window !== 'undefined' ? localStorage.getItem("@TOKEN") : null;
    
    const registerContact = async (form: ICreateContact) =>{
        try {
            const { data } = await api.post("/contacts", form, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setContactsRender([...contactsRender, data])
            toast.success("Contato criado com sucesso")
            router.push("/clients")
        } catch (error) {
            console.log(error);
            toast.error("Esse contato já foi cadastrado")
        }
    }

    const listContacts = async (searchTerm?: string) =>{
        try {
            const { data } = await api.get("/contacts", {
                headers: {
                    Authorization: `Bearer ${token}`
                },
                params: {
                    name: searchTerm
                }
            })
            console.log(data)     
            setContactsRender(data)
        } catch (error) {
           console.log(error);
           
        }

    }

    const listContactById = async (contactId: string) =>{
        try {
            const { data } = await api.get(`/contacts/${contactId}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            return data
        } catch (error) {
            toast.error("Esse contato não existe")
        }
    }

    const updateContact = async (contactId: string, form: IUpdateContact) =>{
        try {
            await api.patch(`/contacts/${contactId}`, form, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            toast.success("Contato atualizado com sucesso")
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
            router.push("/clients")
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
        deleteEmail,
        listContactById
    }

    return (
        <ContactsContext.Provider value={contextValue}>
            {children}	
        </ContactsContext.Provider>
    )
}