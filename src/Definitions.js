import React from "react";

export default function Definition(props) {
  return (
    <div>
      {props.meanings.map(function (meaning, index) {
        return (
          <div key={index}>
            <p>
              {index + 1}. ({meaning.partOfSpeech})
            </p>
            <ul>
              {meaning.definitions.map(function (definition, index) {
                return (
                  <li key={index}>
                    {definition.definition}
                    <br />
                    <em>{definition.example}</em>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
