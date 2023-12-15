"use client";
import { ContainerMain } from "@/components/containers/containerMain/ContainerMain";
import { FormClientEdit } from "@/components/forms/editClientForm/FormClientEdit";
import { Header } from "@/components/header/Header";
import { ContactsProvider } from "@/contexts/contacts/contactsContext";
import { GlobalStyles } from "@/styles/GlobalStyle";
import { BrowserRouter } from "react-router-dom";

export default function ClientProfilePage() {
  return (
    <ContactsProvider>
      <GlobalStyles />
      <Header />
      <main>
        <ContainerMain>
          <FormClientEdit />
        </ContainerMain>
      </main>
    </ContactsProvider>
  );
}
