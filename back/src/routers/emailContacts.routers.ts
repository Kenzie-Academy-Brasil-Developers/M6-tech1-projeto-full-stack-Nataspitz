import { Router } from "express";
import { verifyToken } from "../middlewares/authentication/verifyToken.middleware";
import { notFoundEmail } from "../middlewares/contacts/notFoundEmail.middleware";
import { emailContactController } from "../controllers";
import { validateBody } from "../middlewares/validateBody.middleware";
import { updateEmailContactSchema } from "../schemas/emailContacts.schemas";
import { emailExists } from "../middlewares/contacts/emailExists.middleware";


export const emailContactsRouter: Router = Router()

emailContactsRouter.use(verifyToken, notFoundEmail)
emailContactsRouter.patch("/:id", validateBody(updateEmailContactSchema), emailExists, (req, res) => {emailContactController.update(req, res)})
emailContactsRouter.delete("/:id", (req, res) => {emailContactController.delete(req, res)})