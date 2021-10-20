import React from "react";
import { Container, Header } from "semantic-ui-react";

// need to tell the difference between instructor and student for conditional rendering

const Dashboard = () => {
    const tempUserName = "Jimmy the Taco Man"
  return (
    <Container>
        <Header as="h2" >Welcome back, {tempUserName}!</Header>
      {/* greet user */}
      {/* icon w/badge for "punch card" */}
      {/* instructor actions (view my classes, create class, edit class, remove class, logout), issue "punch" to a student for completing a class */}
      {/* student actions (view my classes, register/unregister for a class), browse classes */}
    </Container>
  );
};

export default Dashboard;
