import { useQuery } from "@apollo/client";
import { QUERY_COMMENTS, QUERY_ME_BASIC } from "../utils/queries";

import CommentList from "../components/CommentList";
import FriendList from "../components/FriendList";
import CommentForm from "../components/CommentForm";

import Auth from "../utils/auth";

const Home = () => {
  // use useQuery hook to make query request
  const { loading, data } = useQuery(QUERY_COMMENTS);

  const { data: userData } = useQuery(QUERY_ME_BASIC);

  const comments = data?.comments || [];

  const loggedIn = Auth.loggedIn();

  return (
    <main>
      {loggedIn && (
        <div className="col-12 mb-3">
          <CommentForm />
        </div>
      )}
      <div className=" commentFriendContainer">
        <div className={`col-12 mb-3 ${loggedIn && "col-lg-8"}`}>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <CommentList
              comments={comments}
              title="Whats EveryOne Talking About!!"
            />
          )}
        </div>
      </div>
    </main>
  );
};
export default Home;
