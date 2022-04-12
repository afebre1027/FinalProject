import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaRegThumbsUp } from "react-icons/fa";

import CommentList from "../components/CommentList";

import { useQuery, useMutation } from "@apollo/client";
import { QUERY_SINGLE_COMMENT } from "../utils/queries";
import { LIKE_COMMENT } from "../utils/mutations";

const SingleComment = (props) => {
  const { id: commentId } = useParams();

  const { loading, data, refetch } = useQuery(QUERY_SINGLE_COMMENT, {
    variables: { id: commentId },
  });

  const [addLike, {error}]=useMutation(LIKE_COMMENT);

  const comment = data?.comment || {};

  useEffect(() => {
    refetch();
    },[refetch, data]);
  
  if (loading) {
    return <div>Loading...</div>;
  }

  

  const handleLikeComment = async (commentId) =>{
    try {
      const {data} = await addLike({
        variables: {commentId: commentId}
      });

      //refetch data after comment is liked
      refetch();
    } catch(err){
      console.error(err);
    }
  };

  return (
    <div className="main">
      <div className="comment-container card mb-3">
        <p className="comments card-header">
          <span style={{ fontWeight: 700 }} className="text-light">
            {comment.username}
          </span>{" "}
          commented on {comment.createdAt}
        </p>
        <div className="card-body">
          <h5 className="card-text">{comment.commentText}</h5>
        </div>
        <div className="card-footer">
          <button
            onClick={() => handleLikeComment(comment._id)}
          >   
            <FaRegThumbsUp />
          </button>
          <p>{comment.likeCount}</p>
          <h8 className="responseForm">
            {comment.reactionCount > 0 && (
              <CommentList reactions={comment.reactions} />
            )}
          </h8>
        </div>
      </div>
    </div>
  );
};

export default SingleComment;
