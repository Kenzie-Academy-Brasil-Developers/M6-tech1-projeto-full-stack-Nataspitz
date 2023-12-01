"use client"
import { ContainerMain } from "@/components/containers/containerMain/ContainerMain"
import { Footer } from "@/components/footer/Footer"
import { FormEditContacts } from "@/components/forms/editContactsForm/FormEditContacts"
import { Header } from "@/components/header/Header"
import { ContactsProvider } from "@/contexts/contacts/contactsContext"
import { GlobalStyles } from "@/styles/GlobalStyle"


interface IEditContact {
    params: {
        id: string
    }
}

export default function ContactProfilePage({ params }: IEditContact) {
    return (
        <>
            <GlobalStyles/>
            <Header />
            <main>
                <ContainerMain>
                    <FormEditContacts id={params.id} />
                </ContainerMain>
            </main>
            <Footer />
        </>
    )
}