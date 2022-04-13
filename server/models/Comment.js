const {Schema, model} = require('mongoose');
const replySchema = require('./Replies');
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
        replies: [replySchema],
        likes:[{
            type: Schema.Types.ObjectId,
            ref: 'User'
        }]
    },

    {
        toJSON: {
            getters: true
        }
    } 
);

commentSchema.virtual('likeCount').get(function() {
        return this.likes.length;
});

commentSchema.virtual('replyCount').get(function (){
    return this.replies.length;
});

const Comment = model('Comment', commentSchema);
module.exports = Comment;