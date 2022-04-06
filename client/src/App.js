import React from "react";
import "./App.css";

import Home from "./components/Home";
import Nav from "./components/Nav";

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <Home></Home>
      </main>
    </div>
  );
}

export default App;
