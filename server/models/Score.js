const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const scoreSchema = new Schema({
  score: {
    type: Number,
    required: true,
  },
  date: {
    type: Number,
    required: true,
    default: Date.now
  },
  teammates: {
    type: String,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const Score = model("Score", scoreSchema);

module.exports = Score;
