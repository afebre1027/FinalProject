import {gql} from '@apollo/client';

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user{
                _id
                username
            }
        }
    }
`;

export const ADD_USER=gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password:$password) {
            token
            user{
                _id
                username
            }
        }
    }
`;

export const ADD_FRIEND = gql `
    mutation addFriend($id: ID!) {
        addFriend(friendId: $id) {
            _id
            username
            friends{
                _id
                username
            }
        }
    }
`;

export const ADD_COMMENT = gql `
    mutation addComment($profile: String!, $username: String!, $commentText: String!){
        addComment(profile: $profile, username: $username, commentText: $commentText){
            _id
            username
            comments{
                _id
                username
                commentText
                createdAt
            }
        }
    }
`;