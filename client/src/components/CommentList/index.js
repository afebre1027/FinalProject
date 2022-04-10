import React from "react";
import { Link } from "react-router-dom";

const CommentList = ({ comments, title }) => {
  if (!comments.length) {
    return <h3>No comments Yet</h3>;
  }

  return (
    <div className="">
      <h3>{title}</h3>
      {comments &&
        comments.map((comment) => (
          <div key={comment._id} className="card mb-3">
            <h4 className="card-header loginHeader" style={{fontSize: 15}}>
              <Link
                to={`/profile/${comment.username}`}
                style={{ fontWeight: 500 }}
                className="text-light"
              >
                {comment.username}
              </Link>{" "}
              {""}
              commented on {comment.createdAt}
            </h4>

            <div className="card-body comment-body">
              <Link to={`/comment.${comment._id}`}>
                <p style={{ color: "#133c55" }}>{comment.commentText}</p>

                <p className="mb-0" style={{ color: "#133c55" }}>
                  Replies: {comment.replyCount} || Click to{" "}
                  {comment.reactionCount ? "see" : "start"} Comment!
                </p>
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default CommentList;
