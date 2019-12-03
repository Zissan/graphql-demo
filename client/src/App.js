import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import logo from "./logo.svg";
import "./App.css";
import Cartoons from "./components/Cartoons";
import CartoonsClass from "./components/CartoonsClass";
import ManageCartoon from "./components/ManageCartoon";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphiql"
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1>Cartoons</h1>
        <ManageCartoon />
      </div>
    </ApolloProvider>
  );
}

export default App;
