const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    feelings: [
    {
        type: Schema.Types.ObjectId,
        ref: 'feeling',
    },
    ],
    comments: [
    {
        type: Schema.Types.ObjectId,
        ref: 'comment',
    },
    ],
    // "g" stands for given "r" stands for recieved
    gThankCount: {
        type: Number,
    },
    gHugCount: {
        type: Number,
    },
    rThankCount: {
        type: Number,
    },
    rHugCount: {
        type: Number,
    },  
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
        id: false,
    }    
);

const User = model('user', userSchema);

module.exports = User;