import React, { useState, createContext } from "react";

export const TimerContext = createContext();

export const TimerProvider = (props) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <TimerContext.Provider value={[isActive, setIsActive]}>
      {props.children}
    </TimerContext.Provider>
  );
};

export const ScoreContext = createContext();

export const ScoreProvider = (props) => {
  const [seconds, setSeconds] = useState(0);

  return (
    <ScoreContext.Provider value={[seconds, setSeconds]}>
      {props.children}
    </ScoreContext.Provider>
  );
};
