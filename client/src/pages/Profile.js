import React from "react";
import { Redirect, useParams } from "react-router-dom";

import CommentList from "../components/CommentList";
import FriendList from "../components/FriendList";
import CommentForm from "../components/CommentForm";
import Auth from "../utils/auth";

import { ADD_FRIEND } from "../utils/mutations";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_USER, QUERY_ME } from "../utils/queries";

const Profile = () => {
  const { username: userParam } = useParams();

  const [addFriend] = useMutation(ADD_FRIEND);
  const { loading, data} = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};


  // redirect to personal profile page if username is the logged-in user's
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Redirect to="/profile" />;
  }



  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return <h4>you need to logged in to see this page.</h4>;
  }

  const handleClick = async () => {
    try {
      await addFriend({
        variables: { id: user._id },
      });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="md-12">
      <div className="flex-row mb-3">
        <h2 className="p-3 display-inline-block" style={{ color: "#d0f4de"}}>
          Viewing {userParam ? `${user.username}'s` : 'your'} profile.
        </h2>

        {userParam && (
          <button className="btn ml-auto" onClick={handleClick}>
            Add Friend
          </button>
        )}
      </div>

      <div className="flex-row justify-space-between mb-3 commentFriendContainer cfc">
        <div className="col-12 mb-3 col-lg-8">
          <CommentList
            comments={user.comments}
            title={`${user.username}'s comments...`}
          />
        </div>

        <div className="col-12 col-lg-3 mb-3 friendList">
          <FriendList
            username={user.username}
            friendCount={user.friendCount}
            friends={user.friends}
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
