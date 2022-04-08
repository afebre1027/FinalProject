import React from "react";
import { FaSteam } from "react-icons/fa";

function Steam() {
  return (
    <section className="steamContainer">
      <div className="steamIcon">
        <h1><FaSteam size={70} /></h1>
      </div>
      <div class="card steamInfo">
        <div class="card-header">
          <h2> Username </h2>
        </div>
        <div class="card-body">
          <h4 class="card-title">
            Games go here</h4>
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
