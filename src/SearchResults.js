import React from "react";
import Definitions from "./Definitions";
import Phonetics from "./Phonetics";
import "./SearchResults.css";

export default function SearchResults(props) {
  if (props.data) {
    return (
      <div>
        <div className="container text-box">
          <h2 className="text-capitalize">{props.data.word}</h2>
          <Phonetics word={props.data.word} phonetics={props.data.phonetics} />
        </div>
        <Definitions meanings={props.data.meanings} />
      </div>
    );
  } else {
    return null;
  }
}
