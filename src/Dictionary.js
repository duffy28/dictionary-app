import axios from "axios";
import React, { useState } from "react";

import SearchResults from "./SearchResults";
import "./Dictionary.css";

export default function Dictionary() {
  let [word, setWord] = useState("");
  let [results, setResults] = useState(null);

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(getData);
  }

  function getWord(event) {
    setWord(event.target.value);
  }

  function getData(response) {
    setResults(response.data[0]);
    console.log(response.data[0].meanings[0].definitions[0].definition);
  }

  return (
    <div>
      <form onSubmit={search}>
        <input type="search" placeholder="Enter a word..." onChange={getWord} />
        <input type="submit" value="Search" />
      </form>
      <SearchResults data={results} />
    </div>
  );
}
