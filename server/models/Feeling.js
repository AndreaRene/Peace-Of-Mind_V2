const { Schema, model } = require('mongoose');
const dateFormat = require('../../client/src/utils/dateFormat');

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
    comments: [
        {
            type: Schema.Types.ObjectId,
            ref: 'comment',
        },
    ],
    hugUsers: [
        {   
            type: Schema.Types.ObjectId,
            ref: 'user',
        },
    ],
    thankUsers: [
        {
            type: Schema.Types.ObjectId,
            ref: 'user',
        },
    ],
    dateTime: {
        type: Date,
        default: Date.now,
        get: dateFormat,
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