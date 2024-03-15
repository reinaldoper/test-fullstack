
export interface TClients {
  id?: number;
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

export  const initialState: TClients = {
  nome: '',
  email: '',
  telefone: '',
  cpf: '',
  status: ''
};