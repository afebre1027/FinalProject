import React from "react";
import profileImage from "../../assets/images/background.jpg";

function Home() {
  return (
    <section>
      <h1 id="home">home page H1</h1>
      <img
        src={profileImage}
        className="my-img"
        style={{ width: "25%" }}
        alt="profile image"
      />
    </section>
  );
}

export default Home;
