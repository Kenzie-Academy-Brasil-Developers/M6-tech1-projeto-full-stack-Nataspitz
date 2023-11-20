import { notFoundClient } from './../middlewares/clients/notFoundClient.middleware';
import { Router } from "express";
import { validateBody } from "../middlewares/validateBody.middleware";
import { newClientSchema, updateClientSchema } from "../schemas/client.schemas";
import { clientsController } from "../controllers";

export const clientsRouter: Router = Router()

clientsRouter.post("/", validateBody(newClientSchema), (req, res) => clientsController.create(req, res))
clientsRouter.post("/login", (req, res) => clientsController.login(req, res))
clientsRouter.patch("/:id", notFoundClient, validateBody(updateClientSchema), (req, res) => clientsController.update(req, res))
clientsRouter.delete("/:id", notFoundClient,(req, res) =>clientsController.delete(req, res))