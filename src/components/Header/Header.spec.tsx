import React from "react";
import { render, screen } from "@testing-library/react";
import { Header } from "./Header";
import { MemoryRouter } from "react-router-dom";

describe("The Header Component", () => {
  it("should render the component", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    expect(screen.getByTestId("race-management-header")).toBeInTheDocument();
  });

  it("should render the correct items", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    expect(screen.getByText(/Race Management/i)).toBeInTheDocument();
    expect(
      screen.getByTestId("race-management-login-icon")
    ).toBeInTheDocument();
  });
});
