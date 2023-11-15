import express ,{ Application } from "express";
import { handleErrors } from "./errors/handleErrors";

export const app: Application = express()
app.use(express.json())

app.use("/clients")
app.use("/login")
app.use("/contacts")

app.use(handleErrors)