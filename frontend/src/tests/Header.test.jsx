import { render, screen } from "@testing-library/react";
import Header from '../components/Header'
import { MemoryRouter } from "react-router-dom";


describe("Should return a logo img.", () => {
  it("should return logo.", async () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    )
    const img = screen.getByRole('img', {  name: /uol - o melhor conteúdo/i});
    expect(img).toBeInTheDocument();
  });
});