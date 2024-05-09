import React, { useState } from "react";
import "./QnaComp.css";
import addIcon from "../../assets/addIcon.png";
import subIcon from "../../assets/subIcon.png";

export default function QnaComp(props) {
  const { question, answer } = props;
  const [changeSymb, setChangeSymb] = useState("add");

  function handleDisplay() {
    if (changeSymb == "add") {
      setChangeSymb("sub");
    } else {
      setChangeSymb("add");
    }
  }
  return (
    <div className="trueContainer">
      <div className="QnaComp" onClick={handleDisplay}>
        <h2>{question}</h2>
        <img src={changeSymb == "add" ? addIcon : subIcon} alt="" />
      </div>
      {changeSymb == "sub" && (
        <div className="answer">{answer}</div>
      )}
      <hr />
    </div>
  );
}
