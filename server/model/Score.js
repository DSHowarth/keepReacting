const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const scoreSchema = new Schema(
  {
    score: {
      type: Int,
      required: true,
      unique: true,
    },
    date: {
      type: Int,
      required: true,
      unique: true,
    },
    teammates: {
      type: String,
      required: true,
    },
    userID: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
);

const Score = model("Score", scoreSchema);

module.exports = Score;
