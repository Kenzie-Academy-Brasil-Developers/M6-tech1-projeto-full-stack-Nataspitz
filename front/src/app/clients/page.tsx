"use client"
import { Header } from "@/components/header/Header";
import { Input } from "@/components/fragments/Input";
import { FaSearch } from "react-icons/fa";
import { GlobalStyles } from "@/styles/GlobalStyle";
import { useState } from "react";
import { Menu } from "@/components/menu/Menu";
import { ContainerDashboard } from "@/components/containers/containerDashboard/ContainerDashboard";
import { ContactList } from "@/components/lists/ContactsList/ContactList";
import { Footer } from "@/components/footer/Footer";


export default function ClientPage() {
    const [openMenu, setOpenMenu] = useState(false)

    return(
        <> 
            <GlobalStyles/>
            <Header header="dashboard" tagChildren={true} openMenu={openMenu} setOpenMenu={setOpenMenu}>
                    {openMenu? <Menu/>:null}
                <div className="header__search">
                    <Input type="search" placeholder="Pesquisar"/>
                    <FaSearch/>
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