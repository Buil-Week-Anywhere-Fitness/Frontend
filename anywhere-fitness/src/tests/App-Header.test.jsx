import React from "react";
import { render, screen } from "@testing-library/react";
import AppHeader from "../components/App-Header";
import App from "../App";

test("Renders AppHeader component", () => {
  render(
    <App>
      <AppHeader />
    </App>
  );
});

test("Renders user icon in header", () => {
  render(
    <App>
      <AppHeader />
    </App>
  );
  const userIcon = screen.getByTestId(/user icon/i);
  expect(userIcon).toBeInTheDocument();
});

test("Renders four buttons to header", () => {
  render(
    <App>
      <AppHeader />
    </App>
  );
  const buttons = screen.getAllByRole("button");
  expect(buttons).toHaveLength(4)
})
