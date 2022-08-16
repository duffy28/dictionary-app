import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms.length > 0) {
    return (
      <div>
        <strong>
          <p>Synonyms: </p>
        </strong>

        <ul className="row syn-list">
          {props.synonyms.map(function (synonym, index) {
            return (
              <li key={index} className="col">
                <p className="synonyms">{synonym} </p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
