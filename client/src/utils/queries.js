import {gql} from '@apollo/client';

export const QUERY_USER = gql `
    query user($username:String!) {
        user(username: $username){
            _id
            username
            email
            friends{
                _id
                username
            }
        }
    }
`;

export const QUERY_ME = gql`
    {
        me{
            _id
            username
            email
            friends{
                _id
                username
            }
        }
    }
`;

export const QUERY_SINGLE_COMMENT= gql`
    query comment($id: ID!){
        comment(_id: $id){
            _id
            commentText
            createdAt
            username
            replies{
                replyText
                username
                createdAt
            }
            replyCount
            likeCount
        }
    }
`;

export const QUERY_COMMENTS = gql`
    query comments{
        comments {
        _id
        commentText
        createdAt
        username
        replyCount    
        likeCount
        }
    }
`;