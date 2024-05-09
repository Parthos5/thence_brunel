import React from "react";
import "./MainNavbar.css";
import burnelLogo from "../../assets/burnelLogo.png";

export default function MainNavbar() {
  return (
    <div className="mainNavbarDiv">
      <div className="mainNavbarRect">
        <img className="burnelLogo" src={burnelLogo} alt="" />
        <div className="mainNavCta">
          <button className="getProjectsBtn">Get Projects</button>
          <button className="onboardBtn">OnBoard Talent</button>
        </div>
      </div>
    </div>
  );
}
