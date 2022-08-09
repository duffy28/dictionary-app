import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [word, setWord] = useState("");
  function search(event) {
    event.preventDefault();
    alert(`Searching for ${word}...`);
  }
  function wordSearch(event) {
    console.log(event.target.value);
    setWord(event.target.value);
  }
  return (
    <div>
      <form onSubmit={search}>
        <input
          type="search"
          placeholder="Enter a word..."
          onChange={wordSearch}
        />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
}
