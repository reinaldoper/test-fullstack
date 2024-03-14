import { Router } from "express";

import ClientsController from "../clientsController/clientsController";

const controllerClient = new ClientsController();

import { bodyClient, paramsClientId } from "../middlewares/validateClients";

const router = Router();

const api = '/api'

router.get(`${api}/clients`, controllerClient.getClients);
router.put(`${api}/clients/:id`, paramsClientId, bodyClient, controllerClient.updateClient);
router.delete(`${api}/clients/:id`, paramsClientId, controllerClient.deleteClient);
router.get(`${api}/clients/:id`, paramsClientId, controllerClient.getClientById);
router.post(`${api}/clients`, bodyClient, controllerClient.createClient);

export default router;