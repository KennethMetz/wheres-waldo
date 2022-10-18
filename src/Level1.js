import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";
import castle from "./castle.jpeg";

import { getDoc, doc, setDoc } from "firebase/firestore";

import { recordClickLocation, placeTarget } from "./Gameplay";

import { useState } from "react";

//**********************FIREBASE INITIALIZATION********************

const firebaseConfig = {
  apiKey: "AIzaSyDA51TWup0oj-OzMkbTO9mro1lXvL3cAxE",
  authDomain: "to-do-list-5137c.firebaseapp.com",
  projectId: "to-do-list-5137c",
  storageBucket: "to-do-list-5137c.appspot.com",
  messagingSenderId: "920314072751",
  appId: "1:920314072751:web:7f145f5bba7e29b42dce5a",
};

const app = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };

//*******************FUNCTIONS**********************************

function Level1() {
  const [targetToggle, setTargetToggle] = useState(false);
  const [clickLocation, setClickLocation] = useState([0, 0]);

  return (
    <div>
      <div className="home">
        <h1 className="header"> LEVEL1 </h1>
        <div className="imageContainer">
          <img
            className="waldo"
            src={castle}
            alt="The Where's Waldo cartoon standing in a forest clearing with four other people spaced very far apart"
            onClick={(e) => {
              recordClickLocation(e);
              console.log(e.nativeEvent.offsetY);
              console.log(e.nativeEvent.target.offsetHeight);
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
              setClickLocation([x, y]);
            }}
          ></img>
          {placeTarget(targetToggle, setTargetToggle, clickLocation)}
        </div>
      </div>
    </div>
  );
}

export default Level1;
