import 'reflect-metadata'
import 'express-async-errors'
import express ,{ Application } from "express";
import { handleErrors } from "./errors/handleErrors";
import { clientsRouter } from "./routers/clients.routers";
import { contactsRouter } from './routers/contacts.routers';

export const app: Application = express()
app.use(express.json())

app.use("/clients", clientsRouter)
app.use("/contacts", contactsRouter)

app.use(handleErrors)