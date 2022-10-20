import React, { useContext } from "react";

import { Link, useNavigate } from "react-router-dom";
import { TimerContext, ScoreContext } from "./TimerContext";

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

import { setDoc, doc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBXqqhlmO7wfawK1_tlJTsC2lvL8yTN85M",
  authDomain: "where-s-waldo-427c2.firebaseapp.com",
  projectId: "where-s-waldo-427c2",
  storageBucket: "where-s-waldo-427c2.appspot.com",
  messagingSenderId: "554131916445",
  appId: "1:554131916445:web:f38caf5ce77d1379727674",
};

const app = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };

function Gameover(punchcard, score) {
  const [isActive, setIsActive] = useContext(TimerContext);
  const [seconds, setSeconds] = useContext(ScoreContext);
  let name = null;
  let navigate = useNavigate();

  async function submitScore(name, seconds, history) {
    try {
      let Ref = doc(db, "Scores", "Leaderboard");
      await setDoc(Ref, { [seconds]: name }, { merge: true });
      console.log("hi");
      console.log("history");
      navigate("/leaderboard");
    } catch (error) {
      console.error("Error writing new message to Firebase Database", error);
    }
  }

  if (punchcard[0] === 1 && punchcard[1] === 1 && punchcard[2] === 1) {
    setIsActive(false);
    return (
      <div className="endGameContainer">
        <div className="endGameTile">
          <div>Congrats!</div>
          <div>Your Score: {seconds}s</div>
          <form>
            <label htmlFor="playerName">Name:</label>
            <input
              type="text"
              id="playerName"
              onChange={(e) => {
                name = e.target.value;
                console.log(name);
                console.log(e.target.value);
              }}
            ></input>

            <Link to="/">
              <button type="button">Cancel</button>
            </Link>

            {/* <Link reloadDocument to="/leaderboard"> */}
            <button
              type="button"
              onClick={(e) => {
                submitScore(name, seconds, navigate);
              }}
            >
              Submit Score
            </button>
            {/* </Link> */}
          </form>
        </div>
      </div>
    );
  }
}

export default Gameover;
