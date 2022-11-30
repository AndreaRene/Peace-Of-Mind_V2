const { Schema, model } = require('mongoose');
const dateFormat = require('../../client/src/utils/dateFormat');

const commentSchema = new Schema({
    commentText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 500,
    },
    username: {
        type: Schema.Types.ObjectId,
        ref: 'user',
    },
    randomUsername: {
        type: String,
        required: true,
    },
    hugCount: {
        type: Number,
    },
    thankCount: {
        type: Number,
    },
    dateTime: {
        type: Date,
        default: Date.now,
        get: dateFormat,
    },
    },
    {
        toJSON: {
            getters: true,
        },
        id: false,
    }
);

const Comment = model('comment', commentSchema);

module.exports = Comment;