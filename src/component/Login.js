import React from "react";
import {
  Button,
  Form,
  Header,
  Segment,
  Message,
  Grid,
} from "semantic-ui-react";
import { useRealmApp } from "../providers/RealmAppProvider";
import "./Login.css";
import SiteHeader from "./SiteHeader";
import clsx from "clsx";

export default function Login() {
  const [mode, setMode] = React.useState("signup");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState({ email: "", password: "" });
  const { registerUser, logIn } = useRealmApp();

  function parseAuthenticationError(err) {
    const parts = err.message.split(":");
    const reason = parts[parts.length - 1].trimStart();
    if (!reason) return { status: "", message: "" };
    const reasonRegex = /(?<message>.+)\s\(status (?<status>[0-9][0-9][0-9])/;
    const match = reason.match(reasonRegex);
    const { status, message } = match?.groups ?? {};
    return { status, message };
  }

  function handleAuthenticationError(err) {
    console.error(err);
    const { status, message } = parseAuthenticationError(err);
    const errorType = message || status;
    switch (errorType) {
      case "invalid username":
        setError((prevErr) => ({
          ...prevErr,
          email: "Invalid email address.",
        }));
        break;
      case "invalid username/password":
      case "invalid password":
      case "401":
        setError((err) => ({ ...error, password: "Incorrect password." }));
        break;
      case "name already in use":
      case "409":
        setError((err) => ({
          ...error,
          email: "Email is already registered.",
        }));
        break;
      case "password must be between 6 and 128 characters":
      case "400":
        setError((err) => ({
          ...error,
          password: "Password must be between 6 and 128 characters.",
        }));
        break;
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    mode === "signup" ? handleRegistrationAndLogin() : handleLogin();
  };

  const handleLogin = async () => {
    try {
      return await logIn(email, password);
    } catch (err) {
      handleAuthenticationError(err);
      console.error(err);
    }
  };

  const handleRegistrationAndLogin = async () => {
    try {
      await registerUser(email, password);
      return await handleLogin();
    } catch (err) {
      handleAuthenticationError(err);
      console.error(err);
    }
  };

  return (
    <div className="main-content login-page">
      <SiteHeader location={"login"} />
      <Grid textAlign="center" className="login-form">
        <Grid.Column style={{ width: "50%", margin: "2em" }}>
          <Segment>
            <Header as="h2" textAlign="center">
              {mode === "signup" ? "Sign Up" : "Log In"}
            </Header>
            <Form
              size="large"
              onSubmit={handleSubmit}
              className={clsx((error.password || error.email) && "error")}
            >
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
              <Message error content={`${error.email} ${error.password}`} />
            </Form>
          </Segment>

          {mode === "signup" ? (
            <Message>
              Already have an account?
              <Button
                className="form-toggle-button"
                onClick={() => {
                  setMode("login");
                  setError({ email: "", password: "" });
                }}
              >
                Log In{" "}
              </Button>
            </Message>
          ) : (
            <Message>
              <Message.Content>
                No account yet?
                <Button
                  className="form-toggle-button"
                  onClick={() => {
                    setMode("signup");
                    setError({ email: "", password: "" });
                  }}
                >
                  Sign Up{" "}
                </Button>
              </Message.Content>
            </Message>
          )}
        </Grid.Column>
      </Grid>
    </div>
  );
}
