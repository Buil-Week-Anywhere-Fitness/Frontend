import React from "react";
import { Button, Card, Container } from "semantic-ui-react";
import { useHistory } from "react-router";

const Logout = () => {
  const { push } = useHistory();
  const logout = () => {
    window.localStorage.getItem("token") && window.localStorage.removeItem("token");
    push("/");
  };

  return (
    <Container text textAlign="center">
      <Card fluid>
        <Card.Header>Are you sure you wish to log out?</Card.Header>
        <Card.Content>
          <Button className="ui" basic color="red" onClick={logout}>
            Yes, I'm sure
          </Button>
        </Card.Content>
      </Card>
    </Container>
  );
};

export default Logout;
