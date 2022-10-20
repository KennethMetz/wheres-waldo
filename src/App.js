import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import { TimerContext, ScoreContext } from "./TimerContext";

function App() {
  const [isActive, setIsActive] = useContext(TimerContext);
  const [seconds, setSeconds] = useContext(ScoreContext);

  useEffect(() => {
    setIsActive(false);
    setSeconds(0);
  }, []);

  return (
    <div className="homeContainer">
      <div className="levelTiles">
        <div className="block1">
          <Link to="level1">
            <div className="L1"></div>
            <p>LEVEL 1</p>
          </Link>
        </div>

        <div className="block2">
          <Link to="level2">
            <div className="L2"></div>
            <p>LEVEL 2</p>
          </Link>
        </div>
      </div>
      <div className="tile">
        <Link to="leaderboard">
          <div className="lbButton">LEADERBOARD</div>
        </Link>
      </div>
    </div>
  );
}

export default App;
