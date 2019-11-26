const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const channelSchema = Schema({
  name: String,
  partOf: String
});

module.exports = mongoose.model("Channel", channelSchema);
