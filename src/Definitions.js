import React from "react";

import Synonyms from "./Synonyms";
import "./SearchResults.css";

export default function Definition(props) {
  return (
    <div>
      {props.meanings.map(function (meaning, index) {
        return (
          <div className="container text-box" key={index}>
            <h3>{meaning.partOfSpeech}</h3>
            <br />
            <ul>
              {meaning.definitions.map(function (definition, index) {
                if (index <= 2) {
                  return (
                    <div>
                      <li className="definition" key={index}>
                        {definition.definition}
                        <br />
                        <em>{definition.example}</em>
                      </li>
                    </div>
                  );
                } else {
                  return null;
                }
              })}
            </ul>
            <Synonyms synonyms={meaning.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
