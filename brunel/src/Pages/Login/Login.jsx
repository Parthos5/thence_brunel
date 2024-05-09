import React from "react";
import "./Login.css";
import burnelLogo from "../../assets/burnelLogo.png";
import crossIcon from "../../assets/crossIcon.png";
import InputComp from "../../Components/InputComp/InputComp";

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
        <p className="quoteForm">
          Start your success <br />
          Journey here!
        </p>

        <div className="inputs">
          <InputComp type="name" />
          <InputComp type="email" />
        </div>

        <button className="submit">Submit</button>
      </div>
    </div>
  );
}
