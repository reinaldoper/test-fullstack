import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import clientApi from "../services/fetchApi";
import { TClients } from "../types/TTypes";
import '../styles/App.css';
import { validateStatus } from "../utils/validateCpfPhoneStatus";

const InitialPage = () => {
  const navigate = useNavigate();
  const [clients, setClients] = useState<TClients[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const headers: RequestInit = {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          }
        };

        const { error, message } = await clientApi(headers, '');
        if (error) {
          alert(error);
          return;
        }
        setClients(message);
        setLoading(false);
      } catch (error) {
        alert("Erro ao carregar clientes. Tente mais tarde.");
      }
    };

    fetchClients();
  }, []);


  const handleClickNavigate = (id: number | undefined) => {
    navigate(`/update/${id}`);
  };

  const renderClients = clients.map((client) => (
    <div key={client.id} className="container-clients">
      <div>
        <p>{client.nome}</p>
        <div className="list-map">{client.email}</div>
      </div>
      <div className="cpf">
        <p>{client.cpf}</p>
        <div className="list-map">{client.telefone}</div>
      </div>
      <div className="atualiza-status status">
        <p className={`${validateStatus(client.status)}`}></p>
        <div className="list-map">{client.status}</div>
      </div>
      <button
        onClick={() => handleClickNavigate(client.id)}
        className='button-edit'
        type="button"
      >
        Editar
      </button>
    </div>
  ));

  const numberClients = `Exibindo ${clients.length} clientes`;

  return (
    <>
      {loading ? <h1>Carregando...</h1> : <span>{renderClients}</span>}
      <div className="list-map">{numberClients}</div>
    </>
  );
}

export default InitialPage;
