const graphql = require("graphql");
const _ = require("lodash");

const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLSchema } = graphql;

var cartoons = [
  { name: "Scooby Doo", genre: "Detective", id: "1" },
  { name: "Tin Tin", genre: "Detective", id: "2" },
  { name: "Courage and The Cowardly Dog", genre: "Comedy", id: "3" }
];

const CartoonType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString }
  })
});

const RootQuery = new GraphQLObjectType({
  name: "Root",
  fields: () => ({
    book: {
      type: CartoonType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return _.find(cartoons, { id: args.id });
      }
    }
  })
});

module.exports = new RootQuery();
