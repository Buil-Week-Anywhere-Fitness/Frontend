import React from "react";
import { Header, Container } from "semantic-ui-react";

const AppHeader = () => {
  return (
    <Container className="app_header" textAlign="center">
      <Header as="h1">Anywhere Fitness</Header>
    </Container>
  );
};

export default AppHeader;
