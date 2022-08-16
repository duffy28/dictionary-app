import React from "react";

import "./Phonetics.css";

export default function Phonetics(props) {
  return (
    <div>
      {props.phonetics.map(function (phonetic, index) {
        return (
          <div key={index} className="row">
            <a
              className="col-1"
              href={phonetic.audio}
              target="_blank"
              rel="noreferrer"
            >
              <button className="audio-button">🔊 Listen</button>
            </a>
            <p className="col">{phonetic.text}</p>
          </div>
        );
      })}
    </div>
  );
}
