const { AuthenticationError } = require('apollo-server-express');
const { Feeling, User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        users: async () => {
            return User.find().populate('feelings');
        },
        user: async (parent, { username }) => {
            return User.findOne({ username }).populate('feelings');
        },
        feelings: async (parent, { username }) => {
            const params = username ? { username } : {};
            return Feeling.find(params).sort({ createdAt: -1 });
        },
        feeling: async (parent, { feelingId }) => {
            return Feeling.findOne({ _id: feelingId });
        },
        me: async (parent, args, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user._id }).populate('feeling');
            }
            throw new AuthenticationError(`You need to be logged in`);
        },
    },

    Mutation: {
        addUser: async (parent, { username, password }) => {
            const user = await User.create({ username, password });
            const token = signToken(user);
            return { token, user };
        },
        login: async (parent, { username, password }) => {
            const user = await User.findOne({ username });

            if (!user) {
                throw new AuthenticationError('No user found with this username');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);

            return { token, user };
        },
        addFeeling: async (parent, { feelingText }, context) => {
            if (context.user) {
                const feeling = await Feeling.create({
                    feelingText,
                    randomUsername: context.user.username,
                });

                await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { feelings: feeling._id } }
                );

                return feeling;
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        addComment: async (parent, { feelingId, commentText }, context) => {
            if (context.user) {
                return Feeling.findOneAndUpdate(
                    { _id: feelingId },
                    {
                        $addToSet: {
                            comments: { commentText, randomUsername: context.user.username },
                        },
                    },
                    {
                        new: true,
                        runValidators: true,
                    },
                );
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        removeFeeling: async (parent, { feelingId }, context) => {
            if (context.user) {
                const feeling = await Feeling.findOneAndUpdate({
                    _id: feelingId,
                    randomUsername: context.user.username,
                });

                await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: { feelings: feeling._id } }
                );

                return feeling;
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        removeComment: async (parent, { feelingId, commentId }, context) => {
            if (context.user) {
                return Feeling.findOneAndUpdate(
                    { _id: feelingId },
                    {
                        $pull: {
                            comments: {
                                _id: commentId,
                                randomUsername: context.user.username,
                            },
                        },
                    },
                    {
                        new: true,
                    },
                );
            }
            throw new AuthenticationError('You need to be logged in!');
        },
    },
};

module.exports = resolvers;
