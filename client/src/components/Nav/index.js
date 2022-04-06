import React from "react";

function Nav() {
  const categories = [
    {
      name: "epic",
      description: "All epic information",
    },
    {
      name: "discord",
      description: "All discord information",
    },
    {
      name: "contact info",
      description: "contact us",
    },
  ];

  function categorySelected() {
    console.log("hello");
  }

  return (
    <header className="">
      <h2>Logo or title of app</h2>
      <nav>
        <ul className="">
          <li className="">
            <a href="#home">Home</a>
          </li>
          <li>Steam</li>
          {categories.map((category) => (
            <li className="" key={category.name}>
              <span onClick={categorySelected}>{category.name}</span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
