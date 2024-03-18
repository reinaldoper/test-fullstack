import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import UpdateClient from '../components/UpdateClient'
import { MemoryRouter } from "react-router-dom";
import { clients } from "./mock/mockClients";
import * as fetchApi from '../services/fetchApi';
import { act } from 'react-dom/test-utils';


describe("Should return a client to edit.", () => {
  it("should return initial page.", async () => {
    jest.spyOn(fetchApi, "default").mockResolvedValueOnce({ message: clients[0] });


    render(
      <MemoryRouter>
        <UpdateClient />
      </MemoryRouter>
    );

    await waitFor(() => {
      const nome = screen.getByText('Inativo');
      expect(nome).toBeInTheDocument();

      const button = screen.getByText('Voltar');
      expect(button).toBeInTheDocument();

      button.click();

    });
  });

  it("should return client edited with error.", async () => {
    jest.spyOn(fetchApi, "default").mockResolvedValueOnce({ message: clients[0] });
    let alertMessage = '';
    window.alert = (message) => {
      alertMessage = message;
    };
  
    render(
      <MemoryRouter>
        <UpdateClient />
      </MemoryRouter>
    );

    const msg = screen.getByText('Atualize as informações do usuário:')
    expect(msg).toBeInTheDocument();

   
  
    await waitFor(() => {
      act(() => { 
        const nomeInput = screen.getByPlaceholderText('Nome');
        expect(nomeInput).toBeInTheDocument();
        fireEvent.input(nomeInput, { target: { value: 'fulana' } });
      });
  
      act(() => {
        const emailInput = screen.getByPlaceholderText('E-mail');
        expect(emailInput).toBeInTheDocument();
        fireEvent.input(emailInput, { target: { value: 'fulana1@test.com' } });
      });
  
      act(() => {
        const cpfInput = screen.getByPlaceholderText('CPF');
        expect(cpfInput).toBeInTheDocument();
        fireEvent.input(cpfInput, { target: { value: '429.282.070-82' } });
      });
  
      act(() => {
        const phoneInput = screen.getByPlaceholderText('Telefone (XX) XXXXX-XXXX');
        expect(phoneInput).toBeInTheDocument();
        fireEvent.input(phoneInput, { target: { value: '(67) 99655-0000' } });
      });
  
      act(() => {
        const statusSelect = screen.getByRole('combobox');
        expect(statusSelect).toBeInTheDocument();
        fireEvent.change(statusSelect, { target: { value: 'Ativo' } });
      });
  
      act(() => {
        const button = screen.getByText('Editar');
        expect(button).toBeInTheDocument();
        button.click();
      });

      expect(alertMessage).toBe('Ocorreu um erro ao enviar os dados. Por favor, tente novamente mais tarde.');

      alertMessage = '';
  
    });
    
  });

  it("should return error message alert invalid phone.", async () => {
    jest.spyOn(fetchApi, "default").mockResolvedValueOnce({ message: clients[0] });
    let alertMessage = '';
    window.alert = (message) => {
      alertMessage = message;
    };
    
  
    render(
      <MemoryRouter>
        <UpdateClient />
      </MemoryRouter>
    );

    const msg = screen.getByText('Atualize as informações do usuário:')
    expect(msg).toBeInTheDocument();

   
  
    await waitFor(() => {
      act(() => { 
        const nomeInput = screen.getByPlaceholderText('Nome');
        expect(nomeInput).toBeInTheDocument();
        fireEvent.input(nomeInput, { target: { value: 'fulana' } });
      });
  
      act(() => {
        const emailInput = screen.getByPlaceholderText('E-mail');
        expect(emailInput).toBeInTheDocument();
        fireEvent.input(emailInput, { target: { value: 'fulana@test.com' } });
      });
  
      act(() => {
        const cpfInput = screen.getByPlaceholderText('CPF');
        expect(cpfInput).toBeInTheDocument();
        fireEvent.input(cpfInput, { target: { value: '429.282.070-82' } });
      });
  
      act(() => {
        const phoneInput = screen.getByPlaceholderText('Telefone (XX) XXXXX-XXXX');
        expect(phoneInput).toBeInTheDocument();
        fireEvent.input(phoneInput, { target: { value: '(67) 99655-00000000000' } });
      });
  
      act(() => {
        const statusSelect = screen.getByRole('combobox');
        expect(statusSelect).toBeInTheDocument();
        fireEvent.change(statusSelect, { target: { value: 'Inativo' } });
      });
  
      act(() => {
        const button = screen.getByText('Editar');
        expect(button).toBeInTheDocument();
        button.click();
      });

      expect(alertMessage).toBe('Por favor, insira um número de telefone válido.');

      alertMessage = '';
  
    });
    
  });

  it("should return error message alert invalid cpf.", async () => {
    jest.spyOn(fetchApi, "default").mockResolvedValueOnce({ message: clients[0] });
    let alertMessage = '';
    window.alert = (message) => {
      alertMessage = message;
    };
    
  
    render(
      <MemoryRouter>
        <UpdateClient />
      </MemoryRouter>
    );

    const msg = screen.getByText('Atualize as informações do usuário:')
    expect(msg).toBeInTheDocument();

   
  
    await waitFor(() => {
      act(() => { 
        const nomeInput = screen.getByPlaceholderText('Nome');
        expect(nomeInput).toBeInTheDocument();
        fireEvent.input(nomeInput, { target: { value: 'fulana' } });
      });
  
      act(() => {
        const emailInput = screen.getByPlaceholderText('E-mail');
        expect(emailInput).toBeInTheDocument();
        fireEvent.input(emailInput, { target: { value: 'fulana@test.com' } });
      });
  
      act(() => {
        const cpfInput = screen.getByPlaceholderText('CPF');
        expect(cpfInput).toBeInTheDocument();
        fireEvent.input(cpfInput, { target: { value: '429.282.070-820000000' } });
      });
  
      act(() => {
        const phoneInput = screen.getByPlaceholderText('Telefone (XX) XXXXX-XXXX');
        expect(phoneInput).toBeInTheDocument();
        fireEvent.input(phoneInput, { target: { value: '(67) 99655-0000' } });
      });
  
      act(() => {
        const statusSelect = screen.getByRole('combobox');
        expect(statusSelect).toBeInTheDocument();
        fireEvent.change(statusSelect, { target: { value: 'Inativo' } });
      });
  
      act(() => {
        const button = screen.getByText('Editar');
        expect(button).toBeInTheDocument();
        button.click();
      });

      expect(alertMessage).toBe('Por favor, insira um CPF válido.');

      alertMessage = '';
  
    });
    
  });

  
  

});
