import React from "react";
import { Header, Button } from "semantic-ui-react";
import { useRealmApp } from "../providers/RealmAppProvider";
import "./SiteHeader.css";

export default function SiteHeader(props) {
  const { logOut } = useRealmApp();
  const { location } = props;

  return (
    <header className="site-header">
      <Header as="h1" className="site-title" id="site-title">
        The Shoppies
      </Header>
      {location === "main" ? (
        <Button
          className="logout-button"
          style={{ margin: "1em" }}
          onClick={() => logOut()}
        >
          Log Out
        </Button>
      ) : (
        ""
      )}
    </header>
  );
}
