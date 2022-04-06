import React from "react";

function Nav(props) {
  const { setCurrentCategory } = props;

  return (
    <header className="">
      <h2>Logo or title of app</h2>
      <nav>
        <div className="menuContainer">
          <ul className="menu">
            <a
              className="menu-button icon-plus"
              href="#menu"
              title="Show navigation"
            ></a>
            <a
              className="menu-button icon-minus"
              href="#0"
              title="Hide navigation"
            ></a>
            <li className="menu-item">
              <a href="#home" onClick={() => setCurrentCategory("homePage")}>
                Home Page
              </a>
            </li>
            <li className="menu-item">
              <span onClick={() => setCurrentCategory("steam")}>Steam!</span>
            </li>
            <li className="menu-item">
              <span onClick={() => setCurrentCategory("epic")}> Epic!</span>
            </li>
            <li className="menu-item">
              <span onClick={() => setCurrentCategory("discord")}>
                Discord!
              </span>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
