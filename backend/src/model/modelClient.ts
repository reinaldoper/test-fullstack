import { TClients } from "../TTypes/TClients";
import prisma from "../prismaClient/Prisma";

class ClientModel {

  private prismaClient = prisma;

  constructor() { }

  public createClient = async (body: TClients): Promise<TClients> => {
    const client = await this.prismaClient.clients.create({
      data: body,
      select: {
        nome: true,
        status: true,
        email: true,
        cpf: true,
        telefone: true,
      }
    });
    return client;
  }
  
  public updateClient = async (id: number, status: string): Promise<TClients | string> => {
    const verify = await this.getClient(id);
    if (!verify) {
      return 'client not found'
    }
    const client = await this.prismaClient.clients.update({
      where: { id: id },
      data: { status: status },
      select: {
        nome: true,
        email: true,
        telefone: true,
        status: true,
        cpf: true,
      },
    });

    return client;
  }

  public getClients = async (): Promise<TClients[]>  => {
    const clients = await this.prismaClient.clients.findMany({
      select: {
        nome: true,
        status: true,
        cpf: true,
        telefone: true,
        email: true,
      },
    });

    return clients;

  }

  public deleteClient = async (id: number): Promise<string> => {
    const verify = await this.getClient(id);
    if (!verify) {
      return 'client not found'
    }
    await this.prismaClient.clients.delete({
      where: { id: id },
    })

    return 'Client deleted successfully'

  }

  public getClient = async (id: number): Promise<TClients> => {
    const client = await this.prismaClient.clients.findUnique({
      where: { id: id },
      select: {
        nome: true,
        email: true,
        telefone: true,
        cpf: true,
        status: true,
      }
    });
    return client as unknown as TClients;
  }

}
export default ClientModel;