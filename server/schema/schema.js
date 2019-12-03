const graphql = require("graphql");
const _ = require("lodash");
const Cartoon = require("../models/cartoon");
const Channel = require("../models/channel");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull
} = graphql;

const CartoonType = new GraphQLObjectType({
  name: "Cartoon",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
    channel: {
      type: ChannelType,
      resolve(parent, args) {
        return Channel.findById(parent.channelId);
      }
    }
  })
});

const ChannelType = new GraphQLObjectType({
  name: "Channel",
  fields: () => ({
    name: { type: GraphQLString },
    partOf: { type: GraphQLString },
    id: { type: GraphQLID },
    cartoons: {
      type: new GraphQLList(CartoonType),
      resolve(parent, args) {
        return Cartoon.find({ channelId: parent.id });
      }
    }
  })
});

const RootQuery = new GraphQLObjectType({
  name: "Root",
  fields: () => ({
    cartoon: {
      type: CartoonType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Cartoon.findById(args.id);
      }
    },
    channel: {
      type: ChannelType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Channel.findById(args.id);
      }
    },
    cartoons: {
      type: new GraphQLList(CartoonType),
      resolve(parent, args) {
        return Cartoon.find({});
      }
    },
    channels: {
      type: GraphQLList(ChannelType),
      resolve(parent, args) {
        return Channel.find({});
      }
    }
  })
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addChannel: {
      type: ChannelType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        partOf: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve(parent, args) {
        let channel = new Channel({
          name: args.name,
          partOf: args.partOf
        });

        return channel.save();
      }
    },
    addCartoon: {
      type: CartoonType,
      args: {
        name: {
          type: new GraphQLNonNull(GraphQLString)
        },
        genre: {
          type: new GraphQLNonNull(GraphQLString)
        },
        channelId: {
          type: new GraphQLNonNull(GraphQLID)
        }
      },
      resolve(parent, args) {
        let cartoon = new Cartoon({
          name: args.name,
          genre: args.genre,
          channelId: args.channelId
        });

        return cartoon.save();
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});
