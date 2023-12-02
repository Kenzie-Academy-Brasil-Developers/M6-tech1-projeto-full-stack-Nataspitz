// import { useContext, useState } from "react";
// import { StyleContactsList } from "./StyleContactsList";
// import { ContactsContext } from "@/contexts/contacts/contactsContext";
// import Link from "next/link";
// import { MdEdit } from "react-icons/md";
// import { IoAddCircleOutline } from "react-icons/io5";


// export function ContactList() {
//     const { contactsRender } = useContext(ContactsContext);
//     const [infoContacts, setInfoContacts] = useState(false);
    
  
//     const renderInfo = () => {
//         if (!infoContacts) {
//             setInfoContacts(true)
//         } else {
//             setInfoContacts(false)
//         }
//     }
  
//     return (
//       <StyleContactsList>
//         <Link href="/contacts" className="newContact">
//           <IoAddCircleOutline />
//           <p>Criar novo contato</p>
//         </Link>
//         {infoContacts? (
//         <ul>
//           {contactsRender && contactsRender.map((contact) => (
//             <li key={contact.id} onClick={renderInfo}>
//               <div className="title">
//                 <h3>{contact.name}</h3>
//                 <Link href={`/contacts/${contact.id}`}>
//                   <MdEdit />
//                 </Link>
//               </div>
//               <div className="info">
//                 <p>Telefone:</p>
//                 <p>{contact.phone}</p>
//               </div>
//               <div className="info">
//                 <p>Emails:</p>
//                 {/* <ul>
//                   {contact.emails.map((email, index) => (
//                     <li key={index}>
//                       <p>{email.email}</p>
//                     </li>
//                   ))}
//                 </ul> */}
//               </div>
//             </li>
//           ))}
//         </ul>
//         ) : (
//             <ul>
//                 {contactsRender && contactsRender.map((contact) => (
//                     <li key={contact.id} onClick={renderInfo}>
//                         <h3>{contact.name}</h3>
//                     </li>
//                 ))}
//             </ul>
//         )}
//       </StyleContactsList>
//     );
//   }
  

import React, { useContext, useState } from "react";
import { StyleContactsList } from "./StyleContactsList";
import { ContactsContext } from "@/contexts/contacts/contactsContext";
import Link from "next/link";
import { MdEdit } from "react-icons/md";
import { IoAddCircleOutline } from "react-icons/io5";

export function ContactList() {
  const { contactsRender } = useContext(ContactsContext);  
  const [expandedContacts, setExpandedContacts] = useState<string[]>([]);


  const toggleContactExpansion = (contactId: string) => {
    setExpandedContacts((prevExpanded) =>
      prevExpanded.includes(contactId)
        ? prevExpanded.filter((id) => id !== contactId)
        : [...prevExpanded, contactId]
    );
  };

  return (
    <StyleContactsList>
      <Link href="/contacts" className="newContact">
        <IoAddCircleOutline />
        <p>Criar novo contato</p>
      </Link>
      <ul>
        {contactsRender!.map((contact) => (
            <li key={contact.id} onClick={() => toggleContactExpansion(contact.id)}>
              <div className="title">
                <h3>{contact.name}</h3>
                {expandedContacts.includes(contact.id) && (
                  <Link href={`/contacts/${contact.id}`}>
                    <MdEdit />
                  </Link>
                )}
              </div>
              {expandedContacts.includes(contact.id) && (
                <>
                  <div className="info">
                    <p>Telefone:</p>
                    <p>{contact.phone}</p>
                  </div>
                  <div className="info">
                    <p>Emails:</p>
                    <ul className="listEmails">
                      {contact!.emailContacts!.map((email, index) => {                        
                        return (
                        <li key={email.id}>
                          <p>{email.email}</p>
                        </li>
                      )})}
                    </ul>
                  </div>
                </>
              )}
            </li>
          ))}
      </ul>
    </StyleContactsList>
  );
}

