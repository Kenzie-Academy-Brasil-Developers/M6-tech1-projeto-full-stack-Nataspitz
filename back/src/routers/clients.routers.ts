import { Router } from "express";
import { validateBody } from "../middlewares/validateBody.middleware";
import { newClientSchema, updateClientSchema } from "../schemas/client.schemas";
import { clientsController } from "../controllers";

export const clientsRouter: Router = Router()

clientsRouter.post("/", validateBody(newClientSchema), (req, res) => clientsController.create(req, res))

clientsRouter.patch("/:id", validateBody(updateClientSchema), (req, res) => clientsController.update(req, res))
clientsRouter.delete("/:id", (req, res) => clientsController.delete(req, res))