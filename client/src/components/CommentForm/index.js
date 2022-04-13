import { React, useState } from "react";

import { useMutation } from "@apollo/client";
import { ADD_COMMENT } from "../../utils/mutations";
import { QUERY_COMMENTS, QUERY_ME } from "../../utils/queries";
import { RiMailSendLine } from "react-icons/ri";


const CommentForm = () => {
  const [commentText, setText] = useState("");
  const [characterCount, setCharacterCount] = useState(0);
  const [addComment, { error }] = useMutation(ADD_COMMENT, {
    update(cache, { data: { addComment } }) {
      // read what's currently in the cache
      const { comments } = cache.readQuery({ query: QUERY_COMMENTS });

      cache.writeQuery({
        query: QUERY_COMMENTS,
        data: { comments: [addComment, ...comments] },
      });
    },
  });

  const handleChange = (event) => {
    if (event.target.value.length <= 280) {
      setText(event.target.value);
      setCharacterCount(event.target.value.length);
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      await addComment({
        variables: { commentText },
      });

      setText("");
      setCharacterCount(0);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="commentForm">
      <form className="formContainer" onSubmit={handleFormSubmit}>
        <textarea
          placeholder="New Comment..."
          value={commentText}
          className="form-input col-12 col-md-9"
          onChange={handleChange}
        ></textarea>
        <button className="btn" type="submit">
          <RiMailSendLine size={30} />
        </button>
        <p className={`m-0 characterCount ${characterCount === 280 ? "text-error" : ""}`}>
        {error && <span className="ml-2">Please enter text...</span>}
      </p>
      </form>

    </div>
  );
};

export default CommentForm;
