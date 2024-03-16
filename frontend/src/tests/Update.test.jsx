import { render, screen, waitFor } from "@testing-library/react";
import UpdateClient from '../components/UpdateClient'
import { MemoryRouter } from "react-router-dom";
import { clients } from "./mock/mockClients";
import * as fetchApi from '../services/fetchApi';


describe("Should return a client to edit.", () => {
  it("should return client edited.", async () => {
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
});
