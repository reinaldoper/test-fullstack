import { render, screen, fireEvent } from "@testing-library/react";
import CreateClient from '../components/CreateClient'
import { MemoryRouter } from "react-router-dom";


describe("Should return an context form create Client.", () => {
  it("should return form.", async () => {
    render(
      <MemoryRouter>
        <CreateClient />
      </MemoryRouter>
    )
    const nome = screen.getByPlaceholderText('Nome'); 
    fireEvent.change(nome, { target: { value: 'Seu novo valor' } });

    const email = screen.getByPlaceholderText('E-mail'); 
    fireEvent.change(email, { target: { value: 'email@email.com' } });

    const cpf = screen.getByPlaceholderText('CPF'); 
    fireEvent.change(cpf, { target: { value: '885.515.330-70' } });

    const phone = screen.getByPlaceholderText('Telefone (XX) XXXXX-XXXX'); 
    fireEvent.change(phone, { target: { value: '(22) 00000-0000' } });

    const select = screen.getByRole('combobox')
    expect(select).toBeInTheDocument();

    fireEvent.change(select, { target: { value: 'Ativo' } });

    const button = screen.getByText('Criar')
    expect(button).toBeInTheDocument();

    const voltarButton = screen.getByText('Voltar')
    expect(voltarButton).toBeInTheDocument();

    voltarButton.click();

  });
});