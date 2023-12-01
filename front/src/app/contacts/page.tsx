"use client"
import { ContainerMain } from "@/components/containers/containerMain/ContainerMain";
import { Footer } from "@/components/footer/Footer";
import { FormRegisterContacts } from "@/components/forms/registerContactsForm/FormRegisterContacts";
import { Header } from "@/components/header/Header";
import { ContactsProvider } from "@/contexts/contacts/contactsContext";
import { GlobalStyles } from "@/styles/GlobalStyle";


export default function ContactsPage() {
    return (
        <>
            <GlobalStyles />
            <Header />
            <main>
                <ContainerMain>
                    <FormRegisterContacts />
                </ContainerMain>
            </main>
            <Footer />
        </>
    )
}