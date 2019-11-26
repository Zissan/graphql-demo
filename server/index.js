const express = require("express");
const schema = require("./schema/schema");

const graphqlHTTPServer = require("express-graphql");

const app = express();

app.use(
  "/graphiql",
  graphqlHTTPServer({
    schema,
    graphiql: true
  })
);

app.listen(4000, () => {
  console.log("Server listening on 4000");
});
