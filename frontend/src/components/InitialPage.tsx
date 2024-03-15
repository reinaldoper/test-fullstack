import { useEffect, useState } from "react";
import clientApi from "../services/fetchApi";
import { TClients } from "../types/TTypes";

const InitialPage = () => {
  const [clients, setClients] = useState<TClients[]>([])

  useEffect(() => {
    const student = async () => {
      const headers: RequestInit = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      }

      const {error,  message } = await clientApi(headers, null)
      if(error){
        alert(error)
        return;
      }
      setClients(message);
      
    };
    student();

  }, [clients])

  const renderClients = clients.length && clients.map((client) => (
    <div key={client.id}>
      <div>
        <li>{client.nome}</li>
        <li>{client.email}</li>
      </div>
      <div>
        <li>{client.cpf}</li>
        <li>{client.telefone}</li>
      </div>
      <div>
        <span></span>
        <li>{client.status}</li>
      </div>
      <button type="button">Editar</button>
    </div>
  ));
  

  return (
    <>
      {clients.length > 0 ? <ol>{renderClients}</ol> : <h1>Carregando...</h1>}
    </>
  )
}

export default InitialPage
