import React from "react";
import profileImage from "../../assets/images/background.jpg";

function Home() {
  return (
    <section>
      <div className="profileInfo">
        <div>
          <h1 id="home">home page H1</h1>
          <img
            src={profileImage}
            className="my-img"
            style={{ width: "25%" }}
            alt="profile image"
          />
        </div>

        <div className="friendsList">
          <h1 className="title">Friends List</h1>
          <p>all friends here</p>
        </div>
      </div>
      <div className="comment-container">
        <div className="comments">
          <h1>name of friend</h1>
          <p>comment posted</p>
        </div>
      </div>
    </section>
  );
}

export default Home;
