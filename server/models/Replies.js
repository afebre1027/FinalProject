const { Schema } = require('mongoose');
const dateFormat = require('../utils/dateFromat');

const replySchema = new Schema(
    {
        replyText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 500
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => dateFormat(timestamp)
        }
    },
    {
        toJSON:{
            getters: true
        }
    }
);
module.exports = replySchema;