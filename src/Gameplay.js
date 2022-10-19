import { useState } from "react";
import waldoImg from "./waldo.webp";
import wizard from "./wizard.webp";
import odlaw from "./odlaw.webp";

let charSelection = null;

function Gameplay() {
  console.log("gameplay");
}

function recordClickLocation(e) {}

function checkWaldoGuess(answer, clickLocation) {
  if (
    clickLocation[0] <= answer.waldo[0] + 5 &&
    clickLocation[0] >= answer.waldo[0] - 5 &&
    clickLocation[1] <= answer.waldo[1] + 5 &&
    clickLocation[1] >= answer.waldo[1] - 5
  ) {
    console.log("GOOD GUESS!");
    return true;
  } else return false;
}

function checkWizardGuess(answer, clickLocation) {
  if (
    clickLocation[0] <= answer.wizard[0] + 5 &&
    clickLocation[0] >= answer.wizard[0] - 5 &&
    clickLocation[1] <= answer.wizard[1] + 5 &&
    clickLocation[1] >= answer.wizard[1] - 5
  ) {
    console.log("GOOD GUESS!");
    return true;
  } else return false;
}

function checkOdlawGuess(answer, clickLocation) {
  console.log(clickLocation);
  console.log(answer.odlaw);
  if (
    clickLocation[0] <= answer.odlaw[0] + 5 &&
    clickLocation[0] >= answer.odlaw[0] - 5 &&
    clickLocation[1] <= answer.odlaw[1] + 5 &&
    clickLocation[1] >= answer.odlaw[1] - 5
  ) {
    console.log("GOOD GUESS!");
    return true;
  } else return false;
}
function PlaceTarget(
  targetToggle,
  setTargetToggle,
  targetLocation,
  answer,
  clickLocation
) {
  // const [guessToggle, setGuessToggle] = useState(false);

  if (targetToggle) {
    return (
      <div
        className="targetLayer"
        style={{ left: targetLocation[0] + "%", top: targetLocation[1] + "%" }}
      >
        <div className="target"></div>
        <div
          className="selector"
          onClick={(e) => {
            targetToggle ? setTargetToggle(false) : setTargetToggle(true);
          }}
        >
          <div
            className="guessCard"
            id="underlined"
            onClick={(e) => {
              if (checkWaldoGuess(answer, clickLocation)) {
                // markChar()
              }
            }}
          >
            <img src={waldoImg} alt="waldo"></img>
            <p>Waldo</p>
          </div>
          <div
            className="guessCard"
            id="underlined"
            onClick={(e) => {
              checkWizardGuess(answer, clickLocation);
            }}
          >
            <img src={wizard} alt="the wizard"></img>

            <p>Wizard</p>
          </div>
          <div
            className="guessCard"
            onClick={(e) => {
              checkOdlawGuess(answer, clickLocation);
            }}
          >
            <img src={odlaw} alt="odlaw"></img>

            <p>Odlaw</p>
          </div>
        </div>
      </div>
    );
  }
}

export { recordClickLocation, PlaceTarget };
