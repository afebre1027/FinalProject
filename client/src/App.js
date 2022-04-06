import React, { useState } from "react";
import "./App.css";

import Home from "./components/Home";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Steam from "./components/steam";
import Epic from "./components/Epic";
import Discord from "./components/Discord";

function App() {
  function renderPage(page) {
    if (page === "homePage") {
      return <Home />;
    } else if (page === "steam") {
      return <Steam />;
    } else if (page === "epic") {
      return <Epic />;
    } else if (page === "discord") {
      return <Discord />;
    }
  }

  const [currentCategory, setCurrentCategory] = useState("homePage");

  return (
    <div>
      <Header
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
      />
      <main>{renderPage(currentCategory)}</main>
    </div>
  );
}

export default App;
