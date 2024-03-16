import { render, screen } from "@testing-library/react";
import Nav from '../components/Nav'
import { MemoryRouter } from "react-router-dom";


describe("Should return an message Nav component.", () => {
  it("should return message.", async () => {
    render(
      <MemoryRouter>
        <Nav />
      </MemoryRouter>
    )
    const msg = screen.getByText(/listagem de usuários/i)
    expect(msg).toBeInTheDocument();
  });
});