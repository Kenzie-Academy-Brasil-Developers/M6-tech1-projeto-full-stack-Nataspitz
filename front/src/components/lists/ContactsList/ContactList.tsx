import { useContext, useState } from "react";
import { StyleContactsList } from "./StyleContactsList";
import { ContactsContext } from "@/contexts/contacts/contactsContext";
import Link from "next/link";


export function ContactList() {
    const { contactsRender } = useContext(ContactsContext)
    const [infoContacts, setInfoContacts] = useState(false)

    const renderInfo = () => {
        if (!infoContacts) {
            setInfoContacts(true)
        } else {
            setInfoContacts(false)
        }
    }

    return(
        <StyleContactsList>
            <Link href="/contacts">Criar novo contato</Link>
            <ul>
                <li onClick={() => renderInfo()}>
                    {infoContacts ? (
                        <>
                            <h3>Nome</h3>
                            <div className="info">
                                <p>Telefone:</p>
                                <p>xxxxxxx</p>
                            </div>
                            <div className="info">
                                <p>Emails:</p>
                                <p>xxxxxxx</p>
                            </div>
                        </>
                    ): (
                    <h3>Nome</h3>
                    )}
                </li>
                <li>
                    <h3>Nome</h3>
                </li>
            </ul>
        </StyleContactsList>
    )
}