import { ApolloProvider } from "@apollo/react-hooks";
import React from "react";
import { AppRegistry } from "react-native";
import { name as appName } from "./app.json";
import { client } from "./src/graphql/client";
import App from "./src/screen/countries";

const Application = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

AppRegistry.registerComponent(appName, () => Application);
