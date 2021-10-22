import React from "react";
import { Container, Divider } from "semantic-ui-react";

const AppFooter = () => {
  return (
    <footer>
      <Divider></Divider>
      <Container textAlign="center">
        <br/>
        Icons made by{" "}
        <a href="https://www.freepik.com" title="Freepik">
          Freepik
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </Container>
    </footer>
  );
};

export default AppFooter;
