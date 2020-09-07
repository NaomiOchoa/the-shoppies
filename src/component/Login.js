import React, { useState } from "react";
import {
  Button,
  Form,
  Header,
  Segment,
  Message,
  Grid,
} from "semantic-ui-react";
import { useRealmApp } from "../providers/RealmAppProvider";

export default function Login() {
  const [mode, setMode] = React.useState("signup");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { registerUser, logIn } = useRealmApp();

  const handleSubmit = (e) => {
    e.preventDefault();
    mode === "signup" ? handleRegistrationAndLogin() : handleLogin();
  };

  const handleLogin = async () => {
    try {
      return await logIn(email, password);
    } catch (err) {
      console.error(err);
    }
  };

  const handleRegistrationAndLogin = async () => {
    try {
      await registerUser(email, password);
      return await handleLogin();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Grid textAlign="center" verticalAlign="middle">
      <Grid.Column>
        <Segment>
          <Header as="h2" textAlign="center">
            {mode === "signup" ? "Sign Up" : "Log In"}
          </Header>
          <Form size="large" onSubmit={handleSubmit}>
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="E-mail address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button type="submit" fluid size="large">
              {mode === "signup" ? "Sign Up" : "Log In"}
            </Button>
          </Form>
        </Segment>

        {mode === "signup" ? (
          <Message>
            Already have an account?
            <Button onClick={() => setMode("login")}>Log In </Button>
          </Message>
        ) : (
          <Message>
            No account yet?
            <Button onClick={() => setMode("signup")}>Sign Up </Button>
          </Message>
        )}
      </Grid.Column>
    </Grid>
  );
}
