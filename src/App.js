import React from "react";
import RealmAppProvider, { useRealmApp } from "./providers/RealmAppProvider";
import RealmApolloProvider from "./providers/RealmApolloProvider";
import Login from "./component/Login";
import MainPage from "./component/MainPage";
import "./App.css";
import NominationsProvider from "./providers/NominationsProvider";

function App() {
  return (
    <RealmAppProvider>
      <RequireAuthentication />
    </RealmAppProvider>
  );
}

export default App;

function RequireAuthentication() {
  const app = useRealmApp();
  if (!app) {
    return <div>Loading</div>;
  }
  return app.user ? (
    <RealmApolloProvider>
      <NominationsProvider>
        <MainPage />
      </NominationsProvider>
    </RealmApolloProvider>
  ) : (
    <Login />
  );
}
