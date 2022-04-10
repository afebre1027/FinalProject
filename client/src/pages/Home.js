import { useQuery } from "@apollo/client";
import { QUERY_COMMENTS, QUERY_ME } from "../utils/queries";

import CommentList from "../components/CommentList";
import FriendList from "../components/FriendList";
import CommentForm from "../components/CommentForm";

import Auth from "../utils/auth";

const Home = () => {
  // use useQuery hook to make query request
  const { loading, data } = useQuery(QUERY_COMMENTS);

  const { data: userData } = useQuery(QUERY_ME);

  const comments = data?.comments || [];
  console.log(comments);

  const loggedIn = Auth.loggedIn();

  return (
    <main>
      <div className="flex-row justify-space-between">
        {loggedIn && (
          <div className="col-12 mb-3">
            <CommentForm />
          </div>
        )}
        <div className={`col-12 mb-3 ${loggedIn && "col-lg-8"}`}>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <CommentList
              comments={comments}
              title="some feed for comment(s)..."
            />
          )}
        </div>
        {loggedIn && userData ? (
          <div className="col-12 col-lg-3 mb-3">
            <FriendList
              username={userData.me.username}
              friendCount={userData.me.friendCount}
              friends={userData.me.friends}
            />
          </div>
        ) : null}
      </div>
    </main>
  );
};
export default Home;
