import ClientModel from "../model/modelClient";
import { Response, Request } from "express";
import ClientDto from "../clientDto/clientDto";
import { Status } from "../Status";

class ClientsController implements ClientDto {

  private client = new ClientModel();

  constructor() { }

  public getClientById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const client = await this.client.getClient(Number(id));
      return res.status(Status.OK).json({ message: client });
    } catch (error) {
      res.status(Status.InternalError).json({ error: 'Internal server error.' });
    }

  };

  public getClients = async (req: Request, res: Response) => {
    try {
      const clients = await this.client.getClients();
      return res.status(Status.OK).json({ message: clients });
    } catch (error) {
      res.status(Status.InternalError).json({ error: 'Internal server error.' });
    }

  };

  public createClient = async (req: Request, res: Response) => {
    try {
      const client = await this.client.createClient(req.body);
      return res.status(Status.Created).json({ message: client });
    } catch (error) {
      res.status(Status.InternalError).json({ error: 'Internal server error.' });
    }
  };

  public updateClient = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const client = await this.client.updateClient(Number(id), req.body);
      return res.status(Status.OK).json({ message: client });
    } catch (error) {
      res.status(Status.InternalError).json({ error: 'Internal server error.' });
    }

  };
  public deleteClient = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const client = await this.client.deleteClient(Number(id));
      return res.status(Status.OK).json({ message: client });
    } catch (error) {
      res.status(Status.InternalError).json({ error: 'Internal server error.' });
    }
  };


}

export default ClientsController;