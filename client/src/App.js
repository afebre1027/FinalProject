import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./components/Home";
import Header from "./components/Header";
import Steam from "./components/steam";
import Epic from "./components/Epic";
import Discord from "./components/Discord";
import Footer from "./components/Footer";

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
      <Footer></Footer>
    </div>
  );
}

export default App;
