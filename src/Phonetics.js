import React from "react";

export default function Phonetics(props) {
  return (
    <div>
      {props.phonetics.map(function (phonetic, index) {
        return (
          <div key={index}>
            <p>{phonetic.text}</p>
            <p>
              <a href={phonetic.audio} target="_blank" rel="noreferrer">
                Listen
              </a>
            </p>
          </div>
        );
      })}
    </div>
  );
}
