import React from "react";
import "./Home.css";
import MainNavbar from "../../Components/MainNavbar/MainNavbar";

export default function Home() {
  return (
    <div>
      <MainNavbar />
      <div className="heroSect">
        <div className="heroHead">
          <div className="graceText">Success Stories</div>
          <div className="heroHeadMain">Every success journey we've encountered.</div>
        </div>

        <div className="subHeroDiv">
          <div className="subHeroStats"></div>
          <div className="subHeroExplore"></div>
        </div>
      </div>
    </div>
  );
}
