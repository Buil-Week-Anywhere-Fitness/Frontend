import React from "react";
import { Container } from "semantic-ui-react";
import ClassList from "./ClassList";

// need to tell the difference between instructor and student for conditional rendering

const Dashboard = () => {
  return (
    <Container fluid>
      <ClassList />
    </Container>
  );
};

export default Dashboard;
