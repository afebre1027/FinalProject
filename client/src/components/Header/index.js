import React from "react";
import { Link } from "react-router-dom";
import { FaSteam, FaHome, FaDiscord, FaPlaystation } from "react-icons/fa";
import { GiExitDoor } from "react-icons/gi";
import {CgProfile} from"react-icons/cg";

const Header = () => {
  return (
    <header className="header">
      <div className="menuContainer">
        <Link to="/">
          <h1><FaHome size={30} /></h1>
        </Link>

        <nav className="menu">
          <div className="menu-item">
            <Link to="/login">Login</Link>
          </div>
          <div className="menu-item">
            <Link to="/signup">Signup</Link>
          </div>
          <div className="menu-item">
            <Link to="/profile">
              <CgProfile size={30} />
            </Link>
          </div>
          <div className="menu-item">
            <Link to="/steam">
              <FaSteam size={30} />
            </Link>
          </div>
          <div className="menu-item">
            <Link to="/logout">
              <GiExitDoor size={30} />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};
export default Header;
