import React from "react";
import { render, screen } from "@testing-library/react";
import Dashboard from "../components/Dashboard";

test("Renders Dashboard component without errors", () => {
  render(<Dashboard />);
  const welcomeText = screen.getByText(/welcome back/i);
  expect(welcomeText).toBeInTheDocument();
});

test("Renders user icon", () => {
  render(<Dashboard />);
  const userIcon = screen.getByTestId(/user icon/i);
  expect(userIcon).toBeInTheDocument();
})