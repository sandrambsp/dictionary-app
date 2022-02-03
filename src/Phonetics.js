import React from "react";

import "./Phonetics.css";

export default function Phonetics(props) {
  return (
    <div className="Phonetics">
      <div className="text">{props.phonetics.text}</div>
      <audio src={props.phonetics.audio} controls></audio>
    </div>
  );
}
