import React from "react";
import "./Footer.css";
import copyrightIcon from "../../assets/copyrightIcon.png";

export default function Footer() {
  return (
    <div className="footerDiv">
      <div className="talupDiv">
        <img src={copyrightIcon} alt="" />
        <p className="talupText">Talup 2023. All rights reserved</p>
      </div>

      <div className="tandc"><p>Terms & Conditions</p>
      <p>Privacy Policy</p></div>
    </div>
  );
}
