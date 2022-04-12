const {User, Comment} = require('../models');
const {AuthenticationError} = require('apollo-server-express');
const {signToken} = require('../utils/auth');

const resolvers = {
    Query:{
        users: async () => {
            return User.find()
                .select('-__v -password')
                .populate('friends')
                .populate('comments')
        },

        user: async (parent, {username}) => {
            return User.findOne({username})
                .select('-__v -password')
                .populate('friends')
                .populate('comments')
        },

        me: async (parent, args, context) => {
            if(context.user){
                const userData = await User.findOne({_id: context.user._id})
                    .select('-__v -password')
                    .populate('friends')
                    .populate('comments')

                return userData;
            }

            throw new AuthenticationError('Not logged in');
        },
        comment: async (parent, {_id}) => {
           const comment = await Comment.findOne({_id})
                .select('-__v')
                
            return comment;
            
        },
        comments: async () => {
            const comments = await Comment.find()
                .select('-__v')
                .sort({createdAt: -1})
                .populate('replies')
            
            return comments;
        }
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return {token, user};
        },
        login: async (parent, {email, password}) => {
            const user = await User.findOne({email});

            if(!user){
                throw new AuthenticationError('Incorrect Credentials');
            }

            const correctPw = await user.isCorrectPassword(password);

            if(!correctPw){
                throw new AuthenticationError('Incorrect Credentials');
            }

            const token = signToken(user);
            return {token, user};
        },
        addComment: async (parent, args, context) => {
            if(context.user){
                const comment = await Comment.create({...args, username:context.user.username});
                

                await User.findOneAndUpdate(
                    {username: context.user.username},
                    {$push: {comments: comment._id }},
                    {new: true, runValidators: true}
                );

                return  comment;
            }

            throw new AuthenticationError('Please log in to leave a comment!');
        },
        deleteComment: async(parent, {commentID}, context) => {
            const comment = await Comment.findByIdAndDelete(
                {_id: commentID}
            );
            return 'Comment deleted';
        },
        likeComment: async(parent, {commentID}, context) => {
            if(context.user){

                const likedComment = await Comment.findByIdAndUpdate(
                    {_id: commentID},
                    {$addToSet: {likes: context.user._id}},
                    {new: true}
                )

                return likedComment;
            }

            throw new AuthenticationError ('Please log in to like a comment!');
        },
        addReply: async(parent, {commentID, replyText}, context) =>{
            if(context.user){
                const updateComment = await Comment.findOneAndUpdate(
                    {_id: commentID},
                    {$push: {replies: {replyText, username: context.user.username}}},
                    {new:true, runValidators: true},
                );

                return updateComment;
            }

            throw new AuthenticationError('You need to be logged in to leave a reply!');
        },
        addFriend: async(parent, {friendId}, context) => {
            if(context.user){
                const updatedUser = await User.findOneAndUpdate(
                    {_id: context.user._id},
                    {$addToSet: {friends: friendId}},
                    {new: true}
                ).populate('friends');

                return updatedUser;
            }

            throw new AuthenticationError('Please log in to add friends!')
        }
    }
};

module.exports = resolvers;