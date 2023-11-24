import { newEmailContactSchema, updateContactSchema } from './../schemas/contacts.schemas';
import { Router } from "express";
import { notFoundContact } from "../middlewares/contacts/notFoundContacts.middleware";
import { validateBody } from "../middlewares/validateBody.middleware";
import { newContactSchema } from "../schemas/contacts.schemas";
import { contactController, emailContactController } from '../controllers';
import { notFoundClient } from '../middlewares/clients/notFoundClient.middleware';
import { verifyToken } from '../middlewares/authentication/verifyToken.middleware';
import { verifyOwner } from '../middlewares/authentication/verifyOwner.middleware';
import { emailExists } from '../middlewares/contacts/emailExists.middleware';
import { phoneExists } from '../middlewares/contacts/phoneExists.middleware';


export const contactsRouter: Router = Router()

contactsRouter.use(verifyToken)
contactsRouter.post("/", validateBody(newContactSchema), (req, res) => {contactController.create(req, res)})
contactsRouter.post("/:id/email", validateBody(newEmailContactSchema), emailExists, (req, res) => {emailContactController.create(req, res)})
contactsRouter.get("/", (req, res) => {contactController.getAll(req, res)})

//contactsRouter.use("/:id", notFoundContact)
contactsRouter.get("/:id", (req, res) => {contactController.getById(req, res)})
contactsRouter.patch("/:id", validateBody(updateContactSchema), (req, res) => {contactController.update(req, res)})
contactsRouter.delete("/:id", (req, res) => {})