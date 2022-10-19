import React, { useContext } from "react";
import { Link } from "react-router-dom";
import waldoImg from "./waldo.webp";
import wizard from "./wizard.webp";
import odlaw from "./odlaw.webp";

// import { CartContext } from "./CartContext";

function Header() {
  //   const [cart, setCart] = useContext(CartContext);

  return (
    <div className="header">
      <Link to="/">
        <div className="characters">
          <img src={waldoImg}></img>
          <img src={wizard}></img>
          <img src={odlaw}></img>
        </div>{" "}
      </Link>
      <Link to="/">
        <h1>WHERE'S WALDO?</h1>
      </Link>
      <ul>
        <Link to="level1">
          <li>LEVEL 1</li>
        </Link>

        <Link to="level2">
          <li>LEVEL 2</li>
        </Link>

        <Link to="leaderboard">
          <li>LEADERBOARD</li>
        </Link>
      </ul>
    </div>
  );
}

export default Header;
