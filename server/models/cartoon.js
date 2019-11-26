const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const cartoonSchema = Schema({
  name: String,
  genre: String,
  channelId: String
});

module.exports = mongoose.model("Cartoon", cartoonSchema);
