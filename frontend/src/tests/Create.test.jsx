import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import CreateClient from '../components/CreateClient'
import { MemoryRouter } from "react-router-dom";


describe("Should return an context form create Client.", () => {
  it("should return form.", async () => {
    const alertSpy = jest.spyOn(window, 'alert');
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

    button.click();

    await waitFor(() => {
      expect(alertSpy).toHaveBeenCalled();
      alertSpy.mockRestore();
    })

  });
  it("should return form with error alert invalid cpf.", () => {
    let alertMessage = '';
    window.alert = (message) => {
      alertMessage = message;
    };
    render(
      <MemoryRouter>
        <CreateClient />
      </MemoryRouter>
    )
    const nome = screen.getByPlaceholderText('Nome');
    fireEvent.change(nome, { target: { value: 'Seu novo valor' } });

    const email = screen.getByPlaceholderText('E-mail');
    fireEvent.change(email, { target: { value: 'e_mail@email.com' } });

    const cpf = screen.getByPlaceholderText('CPF');
    fireEvent.change(cpf, { target: { value: '885.515.330-701' } });

    const phone = screen.getByPlaceholderText('Telefone (XX) XXXXX-XXXX');
    fireEvent.change(phone, { target: { value: '(22) 00000-0000' } });

    const select = screen.getByRole('combobox')
    expect(select).toBeInTheDocument();

    fireEvent.change(select, { target: { value: 'Ativo' } });

    const button = screen.getByText('Criar')
    expect(button).toBeInTheDocument();

    const voltarButton = screen.getByText('Voltar')
    expect(voltarButton).toBeInTheDocument();

    button.click();

    expect(alertMessage).toBe('Por favor, insira um CPF válido.');

    alertMessage = '';

  });

  it("should return form with error alert invalid phone.", () => {
    let alertMessage = '';
    window.alert = (message) => {
      alertMessage = message;
    };
    render(
      <MemoryRouter>
        <CreateClient />
      </MemoryRouter>
    )
    const nome = screen.getByPlaceholderText('Nome');
    fireEvent.change(nome, { target: { value: 'Seu novo valor' } });

    const email = screen.getByPlaceholderText('E-mail');
    fireEvent.change(email, { target: { value: 'e_mail@email.com' } });

    const cpf = screen.getByPlaceholderText('CPF');
    fireEvent.change(cpf, { target: { value: '885.515.330-70' } });

    const phone = screen.getByPlaceholderText('Telefone (XX) XXXXX-XXXX');
    fireEvent.change(phone, { target: { value: '(22) 00000-00000000' } });

    const select = screen.getByRole('combobox')
    expect(select).toBeInTheDocument();

    fireEvent.change(select, { target: { value: 'Ativo' } });

    const button = screen.getByText('Criar')
    expect(button).toBeInTheDocument();

    const voltarButton = screen.getByText('Voltar')
    expect(voltarButton).toBeInTheDocument();

    button.click();

    expect(alertMessage).toBe('Por favor, insira um número de telefone válido.');

    alertMessage = '';

  });

  it("should return redirect.", () => {
    render(
      <MemoryRouter>
        <CreateClient />
      </MemoryRouter>
    )

    const button = screen.getByText('Criar')
    expect(button).toBeInTheDocument();

    const voltarButton = screen.getByText('Voltar')
    expect(voltarButton).toBeInTheDocument();

    voltarButton.click();

  });
});