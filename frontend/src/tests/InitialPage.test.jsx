import { render, screen, waitFor } from "@testing-library/react";
import InitialPage from '../components/InitialPage'
import { MemoryRouter } from "react-router-dom";
import { clients } from "./mock/mockClients";
import * as fetchApi from '../services/fetchApi';


describe("Should return a list of clients.", () => {
  it("should return registered clients.", async () => {
    jest.spyOn(fetchApi, "default").mockResolvedValueOnce({ message: clients });


    render(
      <MemoryRouter>
        <InitialPage />
      </MemoryRouter>
    );

    await waitFor(() => {
      const nome = screen.getByText('fulana');
      expect(nome).toBeInTheDocument();

      const button = screen.getAllByText('Editar');
      expect(button[0]).toBeInTheDocument();

      button[0].click();
    });
  });

  it("should return error.", async () => {
    let alertMessage = '';
    window.alert = (message) => {
      alertMessage = message;
    };

    render(
      <MemoryRouter>
        <InitialPage />
      </MemoryRouter>
    );

    const msg = screen.getByText('Exibindo 0 clientes');
    expect(msg).toBeInTheDocument()

    await waitFor(() => {
      expect(alertMessage).toBe('Erro ao carregar clientes. Tente mais tarde.');

      alertMessage = '';
    });
  });
});
