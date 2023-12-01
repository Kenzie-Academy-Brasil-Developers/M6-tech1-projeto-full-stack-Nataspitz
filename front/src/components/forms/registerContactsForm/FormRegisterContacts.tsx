import { Input } from "@/components/fragments/Input";
import { StyleForms } from "../StyleForms";
import { TContactSchema, schemaContact } from "./schemaForm";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { ContactsContext } from "@/contexts/contacts/contactsContext";
import Link from "next/link";



export function FormRegisterContacts() {
    const { registerContact, deleteContact } = useContext(ContactsContext)

    const {register, handleSubmit, formState: {errors}} = useForm<TContactSchema>({
        resolver: zodResolver(schemaContact),
    })

    const handleSubmitForm = (data: TContactSchema) => {
        registerContact(data)
    }

    return(
        <StyleForms>
            <h3>Novo contato</h3>
            <form onSubmit={handleSubmit(handleSubmitForm)} className="create_form">
                <Input type="text" placeholder="Nome" label="Nome" error={errors.name} {...register("name")}/>
                <Input type="phone" placeholder="Telefone" label="Telefone" error={errors.phone} {...register("phone")}/>
                <Input type="email" placeholder="Email" label="Email" error={errors.emails?.[0]?.email} {...register("emails.0.email")}/>
                <button type="submit">Criar</button>
                <Link href="/clients" className="button_cancel">Cancelar</Link>
            </form>
        </StyleForms>
    )
}