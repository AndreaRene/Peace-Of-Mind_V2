const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
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
    },  
);

userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

const User = model('user', userSchema);

module.exports = User;