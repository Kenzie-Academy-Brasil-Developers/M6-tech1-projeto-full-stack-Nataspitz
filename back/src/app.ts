import 'reflect-metadata'
import 'express-async-errors'
import cors from "cors";
import express ,{ Application } from "express";
import { handleErrors } from "./errors/handleErrors";
import { clientsRouter } from "./routers/clients.routers";
import { contactsRouter } from './routers/contacts.routers';
import { emailContactsRouter } from './routers/emailContacts.routers';

export const app: Application = express()
app.use(cors());
app.use(express.json())

app.use("/clients", clientsRouter)
app.use("/contacts", contactsRouter)
app.use("/emails", emailContactsRouter)

app.use(handleErrors)