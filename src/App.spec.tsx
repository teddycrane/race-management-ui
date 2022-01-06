import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("Should show the landing page", () => {
  render(<App />);
  expect(screen.getByTestId("home-app")).toBeInTheDocument();
});

test("should show the correct header items", () => {
  render(<App />);
  expect(screen.getByText(/Race Management/i)).toBeInTheDocument();
});
