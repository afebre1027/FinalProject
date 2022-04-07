const {Schema, model} = require('mongoose');
const dateFormat = require('../utils/dateFromat');

const commentSchema = new Schema(
    {
        commentText: {
            type: String,
            required: 'You need to add some text!',
            minlength: 1,
            maxlength: 500
        },

        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => dateFormat(timestamp)
        },

        username: {
            type: String,
            required: true
        },

        profile: {
            type: String,
            required: true
        }
    },

    {
        toJSON: {
            getters: true
        }
    }
);


module.exports = commentSchema;