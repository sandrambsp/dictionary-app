import React from "react";
import ReactAudioPlayer from "react-audio-player";

export default function Phonetics(props) {
  return (
    <div className="Phonetics">
      <div className="text">{props.phonetics.text}</div>
      <ReactAudioPlayer src={props.phonetics.audio} controls />
    </div>
  );
}
