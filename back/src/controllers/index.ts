import { ClientServices } from "../services/clients.services";
import { ClientsController } from "./clients.controller";


export const clientService = new ClientServices()
export const clientsController = new ClientsController(clientService)