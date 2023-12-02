"use client"
import { Header } from "@/components/header/Header";
import { Input } from "@/components/fragments/Input";
import { FaSearch } from "react-icons/fa";
import { GlobalStyles } from "@/styles/GlobalStyle";
import { useContext, useEffect, useState } from "react";
import { Menu } from "@/components/menu/Menu";
import { ContainerDashboard } from "@/components/containers/containerDashboard/ContainerDashboard";
import { ContactList } from "@/components/lists/ContactsList/ContactList";
import { Footer } from "@/components/footer/Footer";
import { ContactsContext } from "@/contexts/contacts/contactsContext";


export default function ClientPage() {
    const [openMenu, setOpenMenu] = useState(false)
    const { listContacts } = useContext(ContactsContext)
    const [searchTerm, setSearchTerm] = useState<string>("");

    

    useEffect(() => {
        listContacts()
        console.log("searchTerm", searchTerm);
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchTerm]);

    const searchContacts = (searchTerm: string) => {
        listContacts(searchTerm)
    }

    return(
        <>
          <GlobalStyles/>
            <Header header="dashboard" tagChildren={true} openMenu={openMenu} setOpenMenu={setOpenMenu}>
                    {openMenu? <Menu/>:null}
                <div className="header__search">
                    <Input type="search" placeholder="Pesquisar" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
                    <FaSearch onClick={() => searchContacts(searchTerm)}/>
                </div>
            </Header>
            <main>
                <ContainerDashboard>
                    <h2>Seus Contatos</h2>
                    <ContactList />
                </ContainerDashboard>
            </main>
            <Footer />
        </>
    )
}