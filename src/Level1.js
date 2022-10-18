import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";
import castle from "./castle.jpeg";

import { getDoc, doc, setDoc } from "firebase/firestore";

import { Gameplay, recordClickLocation, dropTarget } from "./Gameplay";

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

  return (
    <div>
      <div className="home">
        <h1
          className="title"
          onClick={(e) => {
            recordClickLocation(e);
          }}
        >
          LEVEL1
        </h1>
        <div className="textHome">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Pharetra
          pharetra massa massa ultricies. Quam viverra orci sagittis eu. Dapibus
          ultrices in iaculis nunc.
        </div>
        <img
          src={castle}
          alt="The Where's Waldo cartoon standing in a forest clearing with four other people spaced very far apart"
          onClick={(e) => {
            recordClickLocation(e);
            targetToggle ? setTargetToggle(false) : setTargetToggle(true);
            console.log(targetToggle);
          }}
        ></img>
      </div>
      {placeTarget(targetToggle)}
    </div>
  );
}

function placeTarget(targetToggle, setTargetToggle) {
  console.log(targetToggle);
  if (targetToggle) {
    return (
      <div className="targetLayer">
        <div className="target">TARGET</div>
        <div
          className="selector"
          onClick={(e) => {
            targetToggle ? setTargetToggle(false) : setTargetToggle(true);
          }}
        >
          <div>
            <p>Waldo</p>
          </div>
          <div>
            <p>Wizard</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Level1;
