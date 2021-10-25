import React from "react";
import { Container } from "semantic-ui-react";
import ClassList from "./ClassList";

// this component will retrieve the class list from the server, then filter that list to display the desired data
// need to tell the difference between instructor and student for conditional rendering

const Dashboard = () => {
  return (
    <Container fluid data-testid="dashboard">
      <ClassList />
    </Container>
  );
};

export default Dashboard;
