import React from "react";
import { Button, Container, Divider, Grid, Header, Icon } from "semantic-ui-react";
import {Link} from "react-router-dom";

const AppHeader = () => {
  const tempUserName = "Jimmy Tacos";
  return (
    <Container className="app_header" textAlign="center">
      <Header as="h1">Anywhere Fitness</Header>
      <Divider/>
      <Grid columns="16">
        <Grid.Row>
          <Grid.Column width="4" textAlign="left">
            <Header as="h2" textAlign="left">
              <Icon
                data-testid="user icon"
                name="user circle outline"
                size="massive"
              />
              {tempUserName}
            </Header>
          </Grid.Column>
          <Grid.Column width="12"  textAlign="right" as="nav" >
            <Button as={Link} to="/classlist" content="Browse" />
            <Button as={Link} to="/about" content="About" />
            <Button as={Link} to="/contact" content="Contact" />
            <Button as={Link} to="/logout" content="Logout" />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default AppHeader;
