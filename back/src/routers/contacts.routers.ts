import { updateContactSchema } from './../schemas/contacts.schemas';
import { Router } from "express";
import { validateBody } from "../middlewares/validateBody.middleware";
import { newContactSchema } from "../schemas/contacts.schemas";
import { contactController, emailContactController } from '../controllers';
import { verifyToken } from '../middlewares/authentication/verifyToken.middleware';
import { newEmailContactSchema } from '../schemas/emailContacts.schemas';
import { notFoundContact } from '../middlewares/contacts/notFoundContacts.middleware';
import { contactExists } from '../middlewares/contacts/contactExists.middleware';

export const contactsRouter: Router = Router()

contactsRouter.use(verifyToken)
contactsRouter.post("/", validateBody(newContactSchema), contactExists, (req, res) => {contactController.create(req, res)})
contactsRouter.get("/", (req, res) => {contactController.getAll(req, res)})
contactsRouter.post("/:id/email", notFoundContact, validateBody(newEmailContactSchema), (req, res) => {emailContactController.create(req, res)})

contactsRouter.use("/:id", notFoundContact)
contactsRouter.get("/:id", (req, res) => {contactController.getById(req, res)})
contactsRouter.patch("/:id", validateBody(updateContactSchema), (req, res) => {contactController.update(req, res)})
contactsRouter.delete("/:id", (req, res) => {contactController.delete(req, res)})