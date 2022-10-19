import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";
import winter from "./winter.jpg";

import { getDoc, doc } from "firebase/firestore";

import {
  recordClickLocation,
  PlaceTarget,
  waldoCharMarker,
  wizardCharMarker,
  odlawCharMarker,
} from "./Gameplay";

import { useState } from "react";

//**********************FIREBASE INITIALIZATION********************

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

//*******************FUNCTIONS**********************************

function Level1() {
  const [targetToggle, setTargetToggle] = useState(false);
  const [targetLocation, setTargetLocation] = useState([0, 0]);
  const [clickLocation, setClickLocation] = useState([0, 0]);
  const [punchcard, setPunchcard] = useState([0, 0, 0]);

  const [answer, setAnswer] = useState({
    odlaw: [100, 100],
    waldo: [0, 0],
    wizard: [100, 0],
  });

  let charSelection = null;

  //COMMENTED OUT TO STOP EXCEEDING FIREBASE QUOTAS

  //GET ANSWER FROM FIREBASE
  // let retrieve = async function () {
  //   let docRef = doc(db, "Level1", "Skiing");
  //   try {
  //     let querySnapshot = await getDoc(docRef);
  //     setAnswer(querySnapshot.data());
  //   } catch (error) {
  //     console.error("Error loading data from Firebase Database", error);
  //   }
  // };

  // retrieve();

  return (
    <div>
      <div className="home">
        <div className="header">
          {" "}
          <div className="statusField"></div>{" "}
        </div>
        <div className="imageContainer">
          <img
            className="waldo"
            src={winter}
            alt="A Where's Waldo cartoon set at a ski hill"
            onClick={(e) => {
              targetToggle ? setTargetToggle(false) : setTargetToggle(true);
              let x = Math.round(
                (e.nativeEvent.offsetX / e.nativeEvent.target.offsetWidth -
                  40 / e.nativeEvent.target.offsetWidth) *
                  100
              );
              let y = Math.round(
                (e.nativeEvent.offsetY / e.nativeEvent.target.offsetHeight -
                  35 / e.nativeEvent.target.offsetHeight) *
                  100
              );
              setTargetLocation([
                x,
                y,
                e.nativeEvent.target.offsetWidth,
                e.nativeEvent.target.offsetHeight,
              ]);
              let xTrue = Math.round(
                (e.nativeEvent.offsetX / e.nativeEvent.target.offsetWidth) * 100
              );
              let yTrue = Math.round(
                (e.nativeEvent.offsetY / e.nativeEvent.target.offsetHeight) *
                  100
              );
              setClickLocation([xTrue, yTrue]);
            }}
          ></img>
          {PlaceTarget(
            targetToggle,
            setTargetToggle,
            targetLocation,
            answer,
            clickLocation,
            punchcard,
            setPunchcard
          )}
          {waldoCharMarker(punchcard, answer, targetLocation)}
          {wizardCharMarker(punchcard, answer, targetLocation)}
          {odlawCharMarker(punchcard, answer, targetLocation)}
        </div>
      </div>
    </div>
  );
}

export default Level1;
