const { Score, User } = require("../models");
const { signToken, AuthenticationError } = require('../utils/auth');
const mongoose = require('mongoose')

const resolvers = {
  Query: {
    scores: async () => {
      return await Score.find().populate('user');
    },
  },
  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password })
      const token = signToken(user);
      return { token, user };
    },

    addScore: async (parent, { input }, context) => {
      try {
      if (context.user) {
        const newScore = await Score.create({
          ...input,
          // user id must be converted from string back into objectID data type to be able to create association
          user: new mongoose.Types.ObjectId(context.user._id),
        });
        const {score, teammates} = newScore;
        return {score, teammates};
      }
    } catch (err) {
      console.log(err)
    }
      throw AuthenticationError;
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    },
  },
};

module.exports = resolvers;
