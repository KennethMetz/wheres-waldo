import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

import { getDoc, doc, query, orderBy } from "firebase/firestore";
import { useState, useContext, useEffect } from "react";
import { TimerContext, ScoreContext } from "./TimerContext";

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

function Leaderboard() {
  const [isActive, setIsActive] = useContext(TimerContext);
  const [seconds, setSeconds] = useContext(ScoreContext);
  const [leaderlist, setLeaderlist] = useState([]);

  useEffect(() => {
    async function GetLeaderboard() {
      let docRef = doc(db, "Scores", "Leaderboard");
      try {
        let querySnapshot = await getDoc(docRef); //Get data from firestore
        let leaders = querySnapshot.data(); //Write only desired data
        let array = Object.entries(leaders); //Convert data object to array
        let sorted = array.sort((a, b) => a[0] - b[0]); //Sort array based on score
        setLeaderlist(sorted);
      } catch (error) {
        console.error("Error loading data from Firebase Database", error);
      }
    }
    GetLeaderboard();
  }, []);
  useEffect(() => {
    setIsActive(false);
    setSeconds(0);
  }, []);
  return (
    <div>
      <div className="home">
        <h2 className="title">LEADERBOARD</h2>
        <div className="leaderboard">
          <table>
            <thead>
              <tr>
                <th>PLAYER NAME</th>
                <th>SCORE</th>
              </tr>
            </thead>
            <tbody>
              {leaderlist.map(([key, value]) => {
                return (
                  <tr key={key}>
                    <td>{value}</td>
                    <td>{key}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Pharetra
          pharetra massa massa ultricies. Quam viverra orci sagittis eu. Dapibus
          ultrices in iaculis nunc.
        </div>
      </div>
    </div>
  );
}

export default Leaderboard;
