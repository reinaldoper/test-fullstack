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

  it("should return client edited.", async () => {
    jest.spyOn(fetchApi, "default").mockResolvedValueOnce({ message: clients[0] });
   
  
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
        fireEvent.input(phoneInput, { target: { value: '(67) 99655-0243' } });
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
  
    });
  });
  

});
