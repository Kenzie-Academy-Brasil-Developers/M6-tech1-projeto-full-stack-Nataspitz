import { validateBody } from './../middlewares/validateBody.middleware';
import { notFoundClient } from './../middlewares/clients/notFoundClient.middleware';
import { Router } from "express";
import { loginClientSchema, newClientSchema, updateClientSchema } from "../schemas/client.schemas";
import { clientsController } from "../controllers";
import { verifyToken } from '../middlewares/authentication/verifyToken.middleware';
import { verifyOwner } from '../middlewares/authentication/verifyOwner.middleware';

export const clientsRouter: Router = Router()

clientsRouter.post("/", validateBody(newClientSchema), (req, res) => clientsController.create(req, res))
clientsRouter.post("/login", validateBody(loginClientSchema), (req, res) => clientsController.login(req, res))

clientsRouter.use("/:id", verifyToken, verifyOwner, notFoundClient)
clientsRouter.patch("/:id", validateBody(updateClientSchema), (req, res) => clientsController.update(req, res))
clientsRouter.delete("/:id", (req, res) => clientsController.delete(req, res))