import React from "react";
import thanksCard from "./images/thank-you-placard.avif";
import { Link } from "react-router-dom";

function ExitToApp() {
  return (
    <div
      style={{
        color: "blue",
        textAlign: "center",
      }}
    >
      <h1>Thank You For Using My Application</h1>
      <img src={thanksCard} alt="Thank You" height="400px" />
      <div container justifyContent="flex-end">
        <div item>
          Signin Again
          <Link to="/">
          <br></br>
            <button>Sign in</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ExitToApp;
