import React from "react";
import { FaSteam, FaHome, FaDiscord, FaPlaystation } from "react-icons/fa";


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
                <FaHome/>
              </h3>
            </li>
            <li className="menu-item">
              <h3 onClick={() => setCurrentCategory("steam")}><FaSteam /></h3>
            </li>
            <li className="menu-item">
              <h3 onClick={() => setCurrentCategory("epic")}><FaPlaystation/></h3>
            </li>
            <li className="menu-item">
              <h3 onClick={() => setCurrentCategory("discord")}>
                <FaDiscord/>
              </h3>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
