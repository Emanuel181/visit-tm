import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./robot.css";
import NavBar from "./NavBar.js";
import ChatBox from "./ChatBox.js";
import Welcome from "./Welcome.js";
import React from "react";


function Robot() {
    const [user] = useAuthState(auth);
    return (
      <div className="App">
        <NavBar />
        {!user ? <Welcome /> : <ChatBox />}
      </div>
    );
  }

export default Robot;