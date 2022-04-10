import React from "react";
import { useParams } from "react-router-dom";
import { FaRegThumbsUp } from "react-icons/fa";

import CommentList from "../components/CommentList";

import { useQuery } from "@apollo/client";
import { QUERY_SINGLE_COMMENT } from "../utils/queries";

const SingleComment = (props) => {
  const { id: commentId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_COMMENT, {
    variables: { id: commentId },
  });

  const comment = data?.comment || {};

  if (loading) {
    return <div>Loading...</div>;
  }

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
          <button>
            <FaRegThumbsUp />
          </button>
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
