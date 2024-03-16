import Section from '../components/Section';
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

describe('Should return Section component.', () => {
  it('should return panel messages', () => {
    render(
      <MemoryRouter>
        <Section />
      </MemoryRouter>
    )

    const msg = screen.getByText(/painel de clientes/i)
    expect(msg).toBeInTheDocument()
  });
});