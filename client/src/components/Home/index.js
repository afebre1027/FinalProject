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
          <Col sm={9} className="main">
            <div className="comment-container card">
              <div className="comments card-header">
                <h1> username of the comment</h1>
              </div>
              <div className="card-body">
                <h5 className="card-text">comment goes here</h5>
              </div>
              <div className="card-footer">
                <h8>like comment or respond to comment</h8>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

    </section>
  );
}

export default Home;
