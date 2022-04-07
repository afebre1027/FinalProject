const {User} = require('../models');
const {AuthenticationError} = require('apollo-server-express');
const {signToken} = require('../utils/auth');

const resolvers = {
    Query:{
        users: async () => {
            return User.find()
                .select('-__v -password')
                .populate('friends')
                .populate('comments');
        },

        user: async (parent, {username}) => {
            return User.findOne({username})
                .select('-__v -password')
                .populate('friends')
                .populate('comments');
        },

        me: async (parent, args, context) => {
            if(context.user){
                const userData = await User.findOne({_id: context.user._id})
                    .select('-__v -password')
                    .populate('friends')
                    .populate('comments');

                return userData;
            }

            throw new AuthenticationError('Not logged in');
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
        addComment: async (parent, {profile, username, commentText}, context) => {
            if(context.user){
                const updatedUser = await User.findOneAndUpdate(
                    {username: profile},
                    {$push: {comments: {commentText, username: username}}},
                    {new: true, runValidators: true}
                ).populate('comments');

                return updatedUser;
            }

            throw new AuthenticationError('Please log in to leave a comment!');
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