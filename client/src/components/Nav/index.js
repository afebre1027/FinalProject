import React from "react";

function Nav(props) {
  const { setCurrentCategory } = props;

  return (
    <header className="">
      <h2>All In One</h2>
      <nav>
        <div className="menuContainer">
          <ul className="menu">
            <li className="menu-item">
              <h3 href="#home" onClick={() => setCurrentCategory("homePage")}>
                Home Page
              </h3>
            </li>
            <li className="menu-item">
              <h3 onClick={() => setCurrentCategory("steam")}>Steam!</h3>
            </li>
            <li className="menu-item">
              <h3 onClick={() => setCurrentCategory("epic")}> Epic!</h3>
            </li>
            <li className="menu-item">
              <h3 onClick={() => setCurrentCategory("discord")}>
                Discord!
              </h3>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
