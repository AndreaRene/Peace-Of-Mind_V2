const jwt = require('jsonwebtoken');

const secret = 'thisisatestsecret';
const expiration = '2h';

module.exports = {
    signToken: function({ user_name, _id }) {
        const payload = { user_name, _id };
        return jwt.sign({ data: payload}, secret, { expiresIn: expiration });
    },
};