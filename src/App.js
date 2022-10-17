import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      BOSS BITCHES ONLY
      <div className="logo"></div>
      <ul>
        <Link to="level1">
          <li>LEVEL 1</li>
        </Link>

        <Link to="level2">
          <li>LEVEL 2</li>
        </Link>

        <Link to="leaderboard">
          <li>Leaderboard</li>
        </Link>
      </ul>
    </div>
  );
}

export default App;
