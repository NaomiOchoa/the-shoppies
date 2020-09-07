import React from "react";
import RealmAppProvider, { useRealmApp } from "./providers/RealmAppProvider";
import RealmApolloProvider from "./providers/RealmApolloProvider";
import "./App.css";

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
    <RealmApolloProvider>//Main Page</RealmApolloProvider>
  ) : (
    <div>Login Screen</div>
  );
}
