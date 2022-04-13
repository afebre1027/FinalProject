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

export const ADD_FRIEND = gql`
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

export const ADD_COMMENT = gql`
    mutation addComment($commentText: String!){
        addComment(commentText: $commentText){
            _id
            username
            commentText
            createdAt
            replies{
                username
                replyText
            }
            likeCount
            replyCount
        }
    }
`;

export const ADD_REPLY = gql`
    mutation addReply($commentID: ID!, $replyText: String!){
        addReply(commentId: $commentID, replyText: $replyText){
            _id
            commentText
            username
            replies{
                createdAt
                replyText
                username
            }
            replyCount
            likeCount
        }
    }
`;

export const LIKE_COMMENT = gql`
mutation likeComment($commentId: ID!){
    likeComment(commentID: $commentId) {
      commentText
      createdAt
      likeCount
      replies{
          username
          replyText
          createdAt
      }
      replyCount
    }
  } 
`