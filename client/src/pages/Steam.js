import React from 'react';
import { FaSteam } from 'react-icons/fa';

function Steam() {
  let user;
  const renderItems = () => {
    if (!user) {
      return (
        <>
          <h2>Welcome Please log in.</h2>
          <p>
            <a href="auth/steam">Sign On with Steam</a>
          </p>
        </>
      );
    } else {
      return (
        <>
          <h2>
            Hello, {user.displayName} . - <a href="logout">Logout</a>
          </h2>
        </>
      );
    }
  };

  return (
    <section className="steamContainer">
      <div className="steamIcon">
        <h1>
          <FaSteam size={70} style={{ color: '#4e5c64' }} />
        </h1>
      </div>
      <div class="card steamInfo">
        <div class="card-header steamHeader">
          <h2> Username </h2>
        </div>
        <div class="card-body steamBody">
          <h4 class="card-title">Games go here</h4>
          <h6 class="card-text">friends list goes here</h6>
          <a href="/auth/steam" class="btn btn-primary"></a>
          {renderItems}
        </div>
      </div>
    </section>
  );
}

export default Steam;
