import React from "react";
import Definitions from "./Definitions";
import Phonetics from "./Phonetics";

export default function SearchResults(props) {
  console.log(props.data);
  if (props.data) {
    return (
      <div>
        <h2 className="text-capitalize">{props.data.word}</h2>
        <Phonetics word={props.data.word} phonetics={props.data.phonetics} />
        <Definitions meanings={props.data.meanings} />
      </div>
    );
  } else {
    return null;
  }
}
