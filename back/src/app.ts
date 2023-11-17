import express ,{ Application } from "express";
import { handleErrors } from "./errors/handleErrors";
import { clientsRouter } from "./routers/clients.routers";

export const app: Application = express()
app.use(express.json())

app.use("/clients", clientsRouter)
app.use("/contacts")

app.use(handleErrors)