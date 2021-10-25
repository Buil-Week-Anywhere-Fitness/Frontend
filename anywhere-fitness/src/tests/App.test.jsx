import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../app/store";
import App from "../App";

test("renders App component without errors", () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(getByText(/anywhere fitness/i)).toBeInTheDocument();
});

test("redirects to login if not authenticated", () => {
  render(<App />);
  const loginText = screen.getByText(/login/i);
  expect(loginText).toBeInTheDocument();
});

test("renders footer component", () => {
  render(<App />);
  const footerText = screen.getByText(/icons made by/i);
  expect(footerText).toBeInTheDocument();
});
