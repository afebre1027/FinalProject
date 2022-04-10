const {gql} = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID!
        username: String!
        email: String!
        friends: [User]
        comments:[Comment]
    }

    type Comment {
        _id: ID!
        commentText: String!
        createdAt: String
        username: String!
        replies: [Reply]
        likes:[String]
        likeCount: Int
        replyCount: Int
    }

    type Reply {
        _id: ID!
        replyText: String!
        createdAt: String
        username: String!
    }

    type Query {
        me: User
        users: [User]
        user(username: String!): User
        comment(_id: ID!): Comment
        comments: [Comment]
    }

    type Mutation{
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        addComment(commentText: String!): Comment
        addFriend(friendId: ID!): User
        addReply(commentID: ID!, replyText: String!): Comment
        likeComment(commentID: ID!): Comment
        deleteComment(commentID: ID!): String!
    }

    type Auth{
        token: ID!
        user: User
    }
`;

module.exports = typeDefs;