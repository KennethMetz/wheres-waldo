import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="homeContainer">
      <div className="levelTiles">
        <div class="block1">
          <Link to="level1">
            <div className="L1"></div>
            <p>LEVEL 1</p>
          </Link>
        </div>

        <div class="block2">
          <Link to="level2">
            <div className="L2"></div>
            <p>LEVEL 2</p>
          </Link>
        </div>
      </div>
      <div classname="tile">
        <Link to="leaderboard">
          <div className="lbButton">LEADERBOARD</div>
        </Link>
      </div>
    </div>
  );
}

export default App;
