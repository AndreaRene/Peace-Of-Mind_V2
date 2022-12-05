const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const feelingSchema = new Schema({
    feelingTitle: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 48,
    },
    feelingText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 500,
    },
    feelingAuthor: {
        type: String,
        required: true,
    },
    hugCount: {
        type: Number,
    },
    thankCount: {
        type: Number,
    },
    comments: [
        {
            commentText: {
                type: String,
                required: true,
                minlength: 1,
                maxlength: 280,
            },
            commentAuthor: {
                type: String,
                required: true,
            },
            hugCount: {
                type: Number,
            },
            thankCount: {
                type: Number,
            },
            dateTime : {
                type: Date,
                default: Date.now,
                get: (timestamp) => dateFormat(timestamp),
            },
        },
    ],
    dateTime: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
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

feelingSchema
    .virtual('commentCount')
    .get(function () {
        return this.comments.length;
    });


const Feeling = model('feeling', feelingSchema);

module.exports = Feeling;