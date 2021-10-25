import React from "react";
import { Router } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import AppHeader from "../components/App-Header";

test("Renders user icon", () => {
  render(
    <Router>
      <AppHeader />
    </Router>
  );
  const userIcon = screen.getByTestId(/user icon/i);
  expect(userIcon).toBeInTheDocument();
});
