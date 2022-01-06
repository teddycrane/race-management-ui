import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("Should show the landing page", () => {
  render(<App />);
  expect(screen.getByTestId("home-app")).toBeInTheDocument();
});
