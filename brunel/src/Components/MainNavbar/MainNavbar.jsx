import React from "react";
import "./MainNavbar.css";
import burnelLogo from "../../assets/burnelLogo.png";
import { Link } from "react-router-dom";

export default function MainNavbar() {
  return (
    <div className="mainNavbarDiv">
      <div className="mainNavbarRect">
        <img className="burnelLogo" src={burnelLogo} alt="" />
        <div className="mainNavCta">
          <Link to="/login">
            <button className="getProjectsBtn">Get Projects</button>
          </Link>

          <button className="onboardBtn">OnBoard Talent</button>
        </div>
      </div>
    </div>
  );
}
