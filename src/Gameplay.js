import { useState } from "react";
import waldoImg from "./waldo.webp";
import wizard from "./wizard.webp";
import odlaw from "./odlaw.webp";

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
  clickLocation,
  punchcard,
  setpunchcard
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
                let temp = punchcard.slice();
                temp[0] = 1;
                setpunchcard(temp);
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
              let temp = punchcard.slice();
              temp[1] = 1;
              setpunchcard(temp);
            }}
          >
            <img src={wizard} alt="the wizard"></img>

            <p>Wizard</p>
          </div>
          <div
            className="guessCard"
            onClick={(e) => {
              checkOdlawGuess(answer, clickLocation);
              let temp = punchcard.slice();
              temp[2] = 1;
              setpunchcard(temp);
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

function waldoCharMarker(punchcard, answer, targetLocation) {
  if (punchcard[0] === 1) {
    console.log(targetLocation[3]);
    return (
      <div
        id="answer"
        className="target"
        style={{
          left: answer.waldo[0] - (40 / targetLocation[2]) * 100 + "%",
          top: answer.waldo[1] - (35 / targetLocation[3]) * 100 + "%",
        }}
      ></div>
    );
  }
}

function wizardCharMarker(punchcard, answer, targetLocation) {
  console.log(punchcard);
  if (punchcard[1] === 1) {
    console.log("da wizzzz");

    return (
      <div
        id="answer"
        className="target"
        style={{
          left: answer.wizard[0] - (40 / targetLocation[2]) * 100 + "%",
          top: answer.wizard[1] - (35 / targetLocation[3]) * 100 + "%",
        }}
      ></div>
    );
  }
}
function odlawCharMarker(punchcard, answer, targetLocation) {
  if (punchcard[2] === 1) {
    console.log("odlaw");

    return (
      <div
        id="answer"
        className="target"
        style={{
          left: answer.odlaw[0] - (40 / targetLocation[2]) * 100 + "%",
          top: answer.odlaw[1] - (35 / targetLocation[3]) * 100 + "%",
        }}
      ></div>
    );
  }
}

export { PlaceTarget, waldoCharMarker, wizardCharMarker, odlawCharMarker };
