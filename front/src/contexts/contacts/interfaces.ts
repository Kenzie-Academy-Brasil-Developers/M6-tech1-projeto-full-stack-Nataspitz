
export interface IContactContext {
    registerContact: (form: any) => void,
    listContacts: (searchTerm?: string | undefined) => void,
    updateContact: (contactId: string, form: IUpdateContact) => void,
    updateEmail: (emailId: string, form: IUpdateEmailContact) => void,
    deleteContact: (contactId: string) => void,
    deleteEmail: (emailId: string) => void,
    contactsRender: IListContacts[],
    listContactById: (id: string) => void
}

export interface ICreateContact {
    name: string
    phone: string
    emails: {email: string}[]
}

export interface IListContacts {
    id: string;
    name: string;
    phone: string;
    emailContacts: [
        {
            id: string;
            email: string
        }
    ]
    createdAt: string;
}[]


export interface IUpdateContact {
    name?: string
    phone?: string
}

export interface IUpdateEmailContact {
    email?: string
}
