import React from "react";

function Steam() {
  return (
    <section className="steamContainer">
      <div>
        <div className="card steamInfo">
          <img
            className="card-img-top"
            src="../assets/images/background.jpg"
            alt="Card image cap"
          ></img>
          <div className="card-body">
            <h3 className="card-header">Username</h3>
            <h4 className="card-text">friends</h4>
            <h5 className="card-text">games</h5>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Steam;
