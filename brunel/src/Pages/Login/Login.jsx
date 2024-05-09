import React, { useState } from "react";
import "./Login.css";
import burnelLogo from "../../assets/burnelLogo.png";
import crossIcon from "../../assets/crossIcon.png";
import InputComp from "../../Components/InputComp/InputComp";
import tick from "../../assets/tick.png";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [infoSubmit, setInfoSubmit] = useState(false);
  const [time, setTime] = useState(5);
  const navigate = useNavigate();
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = () => {
    if (name && isValidEmail(email)) {
      setInfoSubmit(true);
      //   Navigate("/complete")
      setTimeout(() => {
        navigate("/");
      }, 5000);
    } else {
      setInfoSubmit(false);
    }
  };
  const isValidEmail = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  return (
    <div>
      <div className="loginHead">
        <img src={burnelLogo} className="burnelLogo2" alt="" />
        <div className="crossIconDiv">
          <img src={crossIcon} className="crossIcon" alt="" />
        </div>
      </div>

      {!infoSubmit && (
        <div className="registrationForm">
          <p className="graceForm">Registration Form</p>
          <p className="quoteForm">
            Start your success <br />
            Journey here!
          </p>

          <div className="inputs">
            <InputComp
              type="text"
              value={name}
              onChange={handleNameChange}
              placeholder="Enter your name"
            />
            <InputComp
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter your email"
            />
          </div>

          <button
            className={`submit ${name && isValidEmail(email) ? "done" : ""}`}
            onClick={handleSubmit}
            style={{
              backgroundColor: name && isValidEmail(email) ? "#1c1c1c" : "",
            }}
          >
            Submit
          </button>
        </div>
      )}

      {infoSubmit && (
        <>
          <div className="success">
            <img src={tick} className="successTick" alt="" />
            <p className="successGrace">success submitted</p>
            <p className="successHead">Congratulations</p>
            <p className="successDesc">
              Your request has been successfully submitted to us. We will
              validate your information and reach out to your shortly with
              updates
            </p>
          </div>
          <p className="redirect">
            Redirecting you to Homepage in{" "}
            <span className="dark">5 Seconds</span>
          </p>
        </>
      )}
    </div>
  );
}
