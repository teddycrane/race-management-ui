import React from "react";
import { render, screen } from "@testing-library/react";
import Login from "./Login";

describe("The login page", () => {
  it("should render the component", () => {
    render(<Login />);
    expect(screen.getByTestId("race-management-login")).toBeInTheDocument();
  });
});
