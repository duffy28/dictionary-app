import React from "react";
import Definitions from "./Definitions";

export default function SearchResults(props) {
  if (props.data) {
    return (
      <div>
        <h2 className="text-capitalize">{props.data.word}</h2>
        <p>{props.data.phonetic}</p>
        <Definitions meanings={props.data.meanings} />
      </div>
    );
  } else {
    return null;
  }
}
