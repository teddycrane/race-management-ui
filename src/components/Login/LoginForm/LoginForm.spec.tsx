import React from "react";
import { render, screen } from "@testing-library/react";
import { LoginForm } from "./LoginForm";

describe("The Login Form", () => {
  it("should render", () => {
    render(<LoginForm />);
    expect(
      screen.getByTestId("race-management-login-form")
    ).toBeInTheDocument();
  });
});
