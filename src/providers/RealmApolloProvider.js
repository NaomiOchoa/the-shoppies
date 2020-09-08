import React from "react";
import { useRealmApp } from "./RealmAppProvider";

import {
  ApolloProvider,
  ApolloClient,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";

const RealmApolloProvider = ({ children }) => {
  const { id, user } = useRealmApp();
  const [client, setClient] = React.useState(createApolloClient(id, user));
  React.useEffect(() => {
    setClient(createApolloClient(id, user));
  }, [id, user]);

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default RealmApolloProvider;

function createApolloClient(realmAppId, user) {
  const graphql_url = `https://realm.mongodb.com/api/client/v2.0/app/${realmAppId}/graphql`;

  const client = new ApolloClient({
    link: new HttpLink({
      uri: graphql_url,
      fetch: async (uri, options) => {
        if (!options.headers) {
          options.headers = {};
        }
        await user.refreshCustomData();
        const authenticatedOptions = {
          ...options,
          headers: {
            ...options.headers,
            Authorization: `Bearer ${user.accessToken}`,
          },
        };
        return fetch(uri, authenticatedOptions);
      },
    }),
    cache: new InMemoryCache(),
  });

  return client;
}
