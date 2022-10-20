import React, { useState, useEffect, useContext } from "react";
import { TimerContext, ScoreContext } from "./TimerContext";

const Timer = () => {
  const [isActive, setIsActive] = useContext(TimerContext);
  const [seconds, setSeconds] = useContext(ScoreContext);

  //   function toggle() {
  //     setIsActive(!isActive);
  //   }

  //   function reset() {
  //     setSeconds(0);
  //     setIsActive(false);
  //   }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => Math.floor((seconds + 0.1) * 100) / 100);
      }, 100);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <div className="timer">
      <div className="time">TIME: {seconds}s</div>
    </div>
  );
};

export default Timer;
