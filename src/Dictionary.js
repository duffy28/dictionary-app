import axios from "axios";
import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [word, setWord] = useState("");

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(getData);
  }

  function getWord(event) {
    console.log(event.target.value);
    setWord(event.target.value);
  }

  function getData(response) {
    console.log(response.data[0]);
  }

  return (
    <div>
      <form onSubmit={search}>
        <input type="search" placeholder="Enter a word..." onChange={getWord} />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
}
