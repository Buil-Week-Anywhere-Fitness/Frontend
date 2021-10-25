import React from "react";
import { render, screen } from "@testing-library/react";
import Dashboard from "../components/Dashboard";

test("Renders Dashboard component without errors", () => {
  render(<Dashboard />);
  const dashboard = screen.getByTestId(/dashboard/i);
  expect(dashboard).toBeInTheDocument();
});

