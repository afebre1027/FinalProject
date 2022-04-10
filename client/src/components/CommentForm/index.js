import { React, useState } from "react";

import { useMutation } from "@apollo/client";
import { ADD_COMMENT } from "../../utils/mutations";
import { QUERY_COMMENTS, QUERY_ME } from '../../utils/queries';

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
    <div>
      <p className={`m-0 ${characterCount === 280 ? "text-error" : ""}`}>
        Letter count: {characterCount}/280
        {error && <span className="ml-2">Please enter text...</span>}
      </p>
      <form
        className="flex-row justify-center justify-space-between-md align-stretch"
        onSubmit={handleFormSubmit}
      >
        <textarea
          placeholder="New Comment..."
          value={commentText}
          className="form-input col-12 col-md-9"
          onChange={handleChange}
        ></textarea>
        <button className="btn col-12 col-md-3" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CommentForm;
