import ClientModel from "../model/modelClient";
import { Response, Request } from "express";
import ClientDto from "../clientDto/clientDto";
import { Status } from "../Status";

class ClientsController implements ClientDto {

  private client = new ClientModel();

  constructor() { }

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
  
  public updateClient = () => {

  };
  public deleteClient = () => {

  };

}

export default ClientsController;