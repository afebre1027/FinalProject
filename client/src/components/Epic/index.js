import React from "react";

function Epic() {
  return (
    <section className="epicContainer">
      <div className="epicIcon"></div>
      <div class="card epicInfo">
        <div class="card-header">
          <h2> Username </h2>
        </div>
        <div class="card-body">
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

export default Epic;
