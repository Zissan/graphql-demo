const express = require("express");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");

const graphqlHTTPServer = require("express-graphql");

const app = express();

app.use(cors());

mongoose.connect("mongodb://zissan:z1ssan2030@ds213688.mlab.com:13688/rgrjs");
mongoose.connection.once("open", () => {
  console.log("DB connected");
});
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
