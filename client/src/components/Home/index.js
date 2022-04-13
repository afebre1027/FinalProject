import {Button,React,useEffect,useState} from "react";
import profileImage from "../../assets/images/background.jpg";
import { Container, Row, Col } from "react-bootstrap";
import {FaRegThumbsUp} from "react-icons/fa"
import UserAccount from "../account/UserAccount";


function Home() {
  return (
    <section className= "homeContainer ">
      {/* profile and friends left side */}
      <Container fluid className="">
        <Row className="">
          <Col className="">
            <div className="profileInfo sideBar">
              <div>
                <h2 id="home">Username</h2>
                <img
                  src={profileImage}
                  className="my-img"
                  style={{ width: "40%" }}
                  alt="profile image"
                />
              </div>

              <div className="friendsList ">
                <h3 className="title">user</h3>
                <p>
                <FriendList
            username={user.username}
            friendCount={user.friendCount}
            friends={user.friends}
          />
                </p>
              </div>
            </div>
          </Col>

          {/* comment container */}
          <Col sm={9} className="main">
            <div className="comment-container card">
              <div className="comments card-header">
                <h1> username of the comment</h1>
              </div>
              <div className="card-body">
                <h5 className="card-text">comment goes here</h5>
              </div>
              <div className="card-footer">
                <button><FaRegThumbsUp/></button>
                <h8 className="responseForm">respond to comment "input form"</h8>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

    </section>
  );
}

export default Home;
