import React from "react";
import { Header, Button, Icon } from "semantic-ui-react";
import { useRealmApp } from "../providers/RealmAppProvider";
import "./SiteHeader.css";

export default function SiteHeader(props) {
  const { logOut } = useRealmApp();
  const { location } = props;

  return (
    <header className="site-header">
      <Header
        as="h1"
        className="site-title"
        style={{ margin: "1em", color: "#F0EFEC", fontSize: "3em" }}
      >
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
