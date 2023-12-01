import { Input } from "@/components/fragments/Input";
import { StyleForms } from "../StyleForms";
import Link from "next/link";
import { useContext, useEffect } from "react";
import { ContactsContext } from "@/contexts/contacts/contactsContext";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { IUpdateContact } from "@/contexts/contacts/interfaces";



export function FormEditContacts({ id }: { id: string }) {
    const { contactsRender, updateContact, deleteContact,  } = useContext(ContactsContext)

    const router = useRouter()    
    const {register, handleSubmit} = useForm()

    const contact = contactsRender.filter(contact => contact.id === id)[0]
    console.log(contact);
    

    const editContactSubmit: SubmitHandler<IUpdateContact> = (data) => {
        updateContact(id, data)
        router.push('/clients')
    }

    return (
        <StyleForms>
            <h3>Edita seu Contatos</h3>
            <form className="edit__form" onSubmit={handleSubmit(editContactSubmit)}>
                <Input defaultValue={contact?.name} type="text" placeholder="Nome" {...register("name")}/>
                <Input defaultValue={contact?.phone}  type="phone" placeholder="Telefone" {...register("phone")}/>
                <button>Confirmar</button>
                <Link href={"/clients"} className="button_cancel">Cancelar</Link>
            </form>
            <div className="form__delete">
                <p>Deseja excluir sua conta?</p>
                <button onClick={() => deleteContact(id)}>Excluir</button>
            </div>
        </StyleForms>
    )
}