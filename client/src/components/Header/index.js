
import React from "react";
import { Link } from "react-router-dom";
import { FaSteam, FaHome } from "react-icons/fa";
import { GiExitDoor } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";


import Auth from '../../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  }

  return (
    <header className="header">
      <div className="menuContainer">
        <Link to="/">
          <h1>
            <FaHome size={50} />
          </h1>
        </Link>

        <nav className="menu">
          <div className="menu-item">
            {Auth.loggedIn() ? (
              <>
                <Link to="/profile">
                  <CgProfile size={50} />
                </Link>

                <Link to="/steam">
                  <FaSteam size={50} />
                </Link>

                <a href="/">
                  <GiExitDoor size={50} onClick={logout} />
                </a>
              </>
            ) : (
              <>
                <div className="menu-item">
                  <Link to="/login">Login</Link>
                </div>
                <div className="menu-item">
                  <Link to="/signup">Signup</Link>
                </div>
              </>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};
export default Header;
