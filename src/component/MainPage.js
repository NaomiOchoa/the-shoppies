import React from "react";
import { useRealmApp } from "../providers/RealmAppProvider";
import { Header } from "semantic-ui-react";
import SiteHeader from "./SiteHeader";
import "./MainPage.css";
import Nominations from "./Nominations";

export default function MainPage() {
  return (
    <div className="main-content main-page">
      <SiteHeader location={"main"} />
      <Header as="h2" textAlign="center">
        Choose up to 5 movies to nominate!
      </Header>
      <Nominations />
    </div>
  );
}
