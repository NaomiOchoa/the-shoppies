import React from "react";
import { useRealmApp } from "../providers/RealmAppProvider";
import { Header } from "semantic-ui-react";
import SiteHeader from "./SiteHeader";
import "./MainPage.css";
import Nominations from "./Nominations";
import Search from "./Search";
import SubmissionPage from "./SubmissionPage";
import { useNominationsProvider } from "../providers/NominationsProvider";
import Submitted from "./Submitted";

export default function MainPage() {
  const { nominations } = useNominationsProvider();

  return (
    <div className="main-content main-page">
      <SiteHeader location={"main"} />
      <Header as="h2" textAlign="center">
        Choose 5 movies to nominate!
      </Header>
      <Nominations />
      {nominations.length < 5 ? <Search /> : <SubmissionPage />}
      <Submitted />
    </div>
  );
}
