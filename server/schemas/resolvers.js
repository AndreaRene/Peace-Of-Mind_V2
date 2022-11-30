const { AuthenticationError } = require('apollo-server-express');
const { Comment, Feeling, User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        user: async() => {
            return;
        },
        feeling: async() => {
            return;
        },
        comment: async() => {
            return;
        }
    }
}