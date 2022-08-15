import React from "react";

import Synonyms from "./Synonyms";

export default function Definition(props) {
  return (
    <div>
      {props.meanings.map(function (meaning, index) {
        return (
          <div className="container" key={index}>
            <p>({meaning.partOfSpeech})</p>
            <ul>
              {meaning.definitions.map(function (definition, index) {
                if (index <= 2) {
                  return (
                    <div>
                      <li key={index}>
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
