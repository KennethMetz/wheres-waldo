import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Leaderboard from "./Leaderboard";
import Level1 from "./Level1";
import Level2 from "./Level2";
import Gameover from "./Gameover";

const RouteSwitch = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/level1" element={<Level1 />} />
          <Route path="/level2" element={<Level2 />} />
          <Route path="/gameover" element={<Gameover />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default RouteSwitch;
