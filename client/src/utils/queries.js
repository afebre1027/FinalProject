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
            comments{
                _id
                username
                commentText
                createdAt
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
            comments{
                _id
                username
                commentText
                createdAt
            }
        }
    }
`;

export const QUERY_ME_BASIC = gql`
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

export const QUERY_COMMENTS = gql`
query thoughts($username: String) {
    thoughts(username: $username) {
        _id
        thoughtText
        createdAt
        username
        reactionCount
        reactions {
            _id
            createdAt
            username
            reactionBody
        }
    }
}
`
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