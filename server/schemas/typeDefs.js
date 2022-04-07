const {gql} = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID!
        username: String!
        email: String!
        friends: [User]
        comments: [Comment]
    }

    type Comment {
        _id: ID
        commentText: String
        createdAt: String
        username: String
    }

    type Query {
        me: User
        users: [User]
        user(Username: String!): User
    }

    type Mutation{
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        addComment(profile: String!, username: String!, commentText: String!): User
        addFriend(friendId: ID!): User
    }

    type Auth{
        token: ID!
        user: User
    }
`;

module.exports = typeDefs;