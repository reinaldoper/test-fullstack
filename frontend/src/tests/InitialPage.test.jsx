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
});
