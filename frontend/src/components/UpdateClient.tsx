import { useNavigate, useParams } from 'react-router-dom';
import { FormEvent, useEffect, useState } from 'react';
import { TChangeEvent, TClients, initialState } from '../types/TTypes';
import clientApi from '../services/fetchApi';
import { validaTePhone, validateCPF } from '../utils/validateCpfPhoneStatus';
import InitialHeader from './InitialHeader';

const UpdateClient = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<TClients>(initialState);
  const { id } = useParams();

  useEffect(() => {
    const fetchClient = async () => {
      const headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      };

      const options: RequestInit = {
        method: 'GET',
        headers: headers,
      };
      const { error, message } = await clientApi(options, Number(id));
      if (error) {
        alert(error);
        return;
      }
      setFormData(message)
    };
    fetchClient()
  }, [id]);


  const handleChange = ({ target: { name, value } }: TChangeEvent) => {
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { telefone, cpf, nome, email, status } = formData;

    if (!validaTePhone(telefone)) {
      alert('Por favor, insira um número de telefone válido.');
      return;
    }

    if (!validateCPF(cpf)) {
      alert('Por favor, insira um CPF válido.');
      return;
    }

    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    };

    const options: RequestInit = {
      method: 'PUT',
      headers: headers,
      body: JSON.stringify({
        nome,
        email,
        telefone,
        status,
        cpf
      })
    };

    try {
      const { error, message } = await clientApi(options, Number(id));
      if (error) {
        alert(error);
      } else if (message) {
        alert('Cliente atualizado com sucesso');
        setFormData(initialState);
        navigate('/');
      }
    } catch (error) {
      alert('Ocorreu um erro ao enviar os dados. Por favor, tente novamente mais tarde.');
    }
  };

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <>
      <InitialHeader name='Atualizar usuário' content='Atualize as informações do usuário:' />
      <br />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder='Nome'
          name="nome"
          value={formData.nome ? formData.nome:'Carregando'}
          onChange={handleChange}
          required />
        <br />
        <input
          type="email"
          placeholder='E-mail'
          name="email"
          value={formData.email ? formData.email: 'Carregando'}
          onChange={handleChange}
          required />
        <br />
        <input
          type="text"
          placeholder='CPF'
          name="cpf"
          value={formData.cpf ? formData.cpf: 'Carregando'}
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="tel"
          placeholder='Telefone (XX) XXXXX-XXXX'
          name="telefone"
          value={formData.telefone ? formData.telefone: 'Carregando'}
          onChange={handleChange}
          required />
        <br />
        <select name='status' value={formData.status ? formData.status: 'Carregando'} onChange={handleChange} required >
          <option value="">Status</option>
          <option value="Ativo">Ativo</option>
          <option value="Inativo">Inativo</option>
          <option value="Aguardando ativação">Aguardando ativação</option>
          <option value="Desativado">Desativado</option>
        </select>
        <br />
        <div className='form-buttons'>
          <button className='button-nav' type="submit">Editar</button>
          <button className='button-edit' onClick={handleBackClick} type="button">Voltar</button>
        </div>
      </form>
    </>
  )
}

export default UpdateClient
