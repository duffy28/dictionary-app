import React from "react";

import "./Phonetics.css";

export default function Phonetics(props) {
  return (
    <div className="container">
      {props.phonetics.map(function (phonetic, index) {
        return (
          <div key={index} className="row">
            <a
              className="col-lg-1"
              href={phonetic.audio}
              target="_blank"
              rel="noreferrer"
            >
              <button className="audio-button">🔊 Listen</button>
            </a>
            <p className="col-lg txt">{phonetic.text}</p>
          </div>
        );
      })}
    </div>
  );
}
