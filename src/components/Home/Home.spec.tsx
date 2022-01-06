import React from "react";
import { render, screen } from "@testing-library/react";
import { Home } from "./Home";

describe("The Home Page", () => {
  it("should render the page", () => {
    render(<Home />);
    expect(screen.getByTestId('race-management-home-page')).toBeInTheDocument();
  });
});
