import { useState } from 'react';
import { TClients, TChangeEvent, initialState } from '../types/TTypes';
import { FormEvent } from "react";
import '../styles/App.css'
import { validaTePhone, validateCPF } from '../utils/validateCpfPhoneStatus';
import { useNavigate } from 'react-router-dom';
import clientApi from '../services/fetchApi';
import InitialHeader from './InitialHeader';

const CreateClient = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<TClients>(initialState);

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
      method: 'POST',
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
      const { error, message } = await clientApi(options, '');
      if (error) {
        alert(error);
      } else if (message) {
        alert('Cliente cadastrado com sucesso');
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
      <InitialHeader name='Novo usuário' content='Informe os campos a seguir para criar novo usuário:' />
      <br />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder='Nome'
          name="nome"
          value={formData.nome}
          onChange={handleChange}
          required />
        <br />
        <input
          type="email"
          placeholder='E-mail'
          name="email"
          value={formData.email}
          onChange={handleChange}
          required />
        <br />
        <input
          type="text"
          placeholder='CPF'
          name="cpf"
          value={formData.cpf}
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="tel"
          placeholder='Telefone (XX) XXXXX-XXXX'
          name="telefone"
          value={formData.telefone}
          onChange={handleChange}
          required />
        <br />
        <select name='status' value={formData.status} onChange={handleChange} required >
          <option value="">Status</option>
          <option value="Ativo">Ativo</option>
          <option value="Inativo">Inativo</option>
          <option value="Aguardando ativação">Aguardando ativação</option>
          <option value="Desativado">Desativado</option>
        </select>
        <br />
        <div className='form-buttons'>
          <button className='button-nav' type="submit">Criar</button>
          <button className='button-edit' onClick={handleBackClick} type="button">Voltar</button>
        </div>
      </form>
    </>
  )
}

export default CreateClient
