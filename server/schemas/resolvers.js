const { Score, User } = require("../models");

const resolvers = {
  Query: {
    score: async () => {
      return await Score.find();
    },
  },
  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      return await User.create({ username, email, password });
    },

    addScore: async (parent, { score }, context) => {
      if (context.user) {
        const score = await Score.create({
          score,
          userId: context.user._id,
        });

        return score;
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
