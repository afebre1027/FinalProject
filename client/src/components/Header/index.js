import React from "react";
import Nav from "../Nav";
import { Link } from "react-router-dom";
import { FaSteam, FaHome, FaDiscord, FaPlaystation } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-secondary mb-4 py-2 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <Link to="/">
          <h1>All in One</h1>
        </Link>

        <nav className="text-center">
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
          <Link to="/profile"><FaHome/></Link>
          <Link to="/steam"><FaSteam /></Link>
          
        </nav>
      </div>
    </header>
  );
};
export default Header;
