import React from "react";
import { Container, Tab } from "semantic-ui-react";
import Signup from "./Signup";
import Login from "./Login";

const Home = () => {
  const panes = [
    {
      menuItem: "Login",
      render: () => {
        <Login />;
      },
    },
    {
      menuItem: "Signup",
      render: () => {
        <Signup />;
      },
    },
  ];

  return (
    <Container text>
      <Tab panes={panes} />
    </Container>
  );
};

export default Home;
