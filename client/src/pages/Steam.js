import React from "react";
import { FaSteam } from "react-icons/fa";

function Steam() {
  return (
    <section className="steamContainer">
      <div className="steamIcon">
        <h1>
          <FaSteam size={70}  style={{ color: "#4e5c64"}}/>
        </h1>
      </div>
      <div class="card steamInfo">
        <div class="card-header steamHeader">
          <h2> Username </h2>
        </div>
        <div class="card-body steamBody">
          <h4 class="card-title">Games go here</h4>
          <h6 class="card-text">friends list goes here</h6>
          <a href="#" class="btn btn-primary">
            sign in / login link
          </a>
        </div>
      </div>
    </section>
  );
}

export default Steam;
