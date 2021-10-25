import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../components/Home";

test("Renders login/signup tab", () => {
  render(<Home />);
  const loginTab = screen.getByTestId(/login tab/i);
  expect(loginTab).toBeInTheDocument();
})