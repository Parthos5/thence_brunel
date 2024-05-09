import React from "react";
import "./Login.css";
import burnelLogo from "../../assets/burnelLogo.png";
import crossIcon from "../../assets/crossIcon.png";

export default function Login() {
  return (
    <div>
      <div className="loginHead">
        <img src={burnelLogo} className="burnelLogo2" alt="" />
        <div className="crossIconDiv">
          <img src={crossIcon} className="crossIcon" alt="" />
        </div>
      </div>

      <div className="registrationForm">
        <p className="graceForm">Registration Form</p>
        <p className="quoteForm">Start your success <br />Journey here!</p>
      </div>
    </div>
  );
}
