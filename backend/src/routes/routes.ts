import { Router } from "express";

import ClientsController from "../clientsController/clientsController";

const controllerClient = new ClientsController();

const router = Router();

const api = '/api'

router.get(`${api}/clients`, controllerClient.getClients);
router.put(`${api}/clients/:id`, controllerClient.updateClient);
router.delete(`${api}/clients/:id`, controllerClient.deleteClient);
router.get(`${api}/clients/:id`, controllerClient.getClientById);
router.post(`${api}/clients`, controllerClient.createClient);

export default router;