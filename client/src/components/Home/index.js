import React from "react";
import profileImage from "../../assets/images/background.jpg";
import { Container, Row, Col } from "react-bootstrap";

function Home() {
  return (
    <section className= "homeContainer ">
      {/* profile and friends left side */}
      <Container fluid className="">
        <Row className="">
          <Col className="">
            <div className="profileInfo sideBar">
              <div>
                <h1 id="home">home page H1</h1>
                <img
                  src={profileImage}
                  className="my-img"
                  style={{ width: "25%" }}
                  alt="profile image"
                />
              </div>

              <div className="friendsList ">
                <h1 className="title">Friends List</h1>
                <p>all friends here</p>
              </div>
            </div>
          </Col>
          <Col sm={9} className=" main">
            <div className="comment-container">
              <div className="comments">
                <h1>name of friend</h1>
                <p>comment posted</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

    </section>
  );
}

export default Home;
