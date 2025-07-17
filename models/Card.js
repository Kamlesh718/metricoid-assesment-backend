const mongoose = require("mongoose");

const CardSchema = new mongoose.Schema({
  name: { type: String },
  job: { type: String },
  about: { type: String },
  noOfTask: { type: Number },
  noOfRatings: { type: Number },
});

module.exports = mongoose.model("Card", CardSchema);
