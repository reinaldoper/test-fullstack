
export interface TClients {
  nome: string;
  telefone: string;
  email: string;
  cpf: string;
  status: string;
}


export interface TChangeEvent {
  target: {
    name: string;
    value: string;
  };
}