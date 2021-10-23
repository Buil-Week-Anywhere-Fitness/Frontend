import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Label, List } from "semantic-ui-react";

const ClassList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://bw-anywhere-fitness-pt29.herokuapp.com/api/auth")
      .then((res) => setUsers(res.data));
  }, []);

  return (
    <Container text>
      This is only for testing purposes, this is not the data that will go here.
      <List>
        {users.map((user, index) => (
          <List.Item key={index}>
            <List.Content>
              <List.Header>
                <Label>{user.user_id}</Label>
                {user.username}
              </List.Header>
              <List.Description>{user.role_name}</List.Description>
            </List.Content>
          </List.Item>
        ))}
      </List>
    </Container>
  );
};

export default ClassList;
