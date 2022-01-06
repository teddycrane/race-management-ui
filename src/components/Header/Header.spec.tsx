import React from "react";
import { render, screen } from "@testing-library/react";
import { Header } from "./Header";

describe("The Header Component", () => {
  it("should render the component", () => {
    render(<Header />);
    expect(screen.getByTestId("race-management-header")).toBeInTheDocument();
  });

  it("should render the correct items", () => {
    render(<Header />);
    expect(screen.getByText(/Race Management/i)).toBeInTheDocument();
  });
});
