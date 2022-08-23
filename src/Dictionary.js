import axios from "axios";
import React, { useState } from "react";

import SearchResults from "./SearchResults";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary() {
  let [word, setWord] = useState("");
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(getData);

    let apiKey = "563492ad6f917000010000017b6e7b4fff6641a3a5cebf6f288c09bb";
    let picUrl = `https://api.pexels.com/v1/search?query=${word}&per_page=6`;
    axios
      .get(picUrl, { headers: { Authorization: `Bearer ${apiKey}` } })
      .then(getPics);
  }

  function getWord(event) {
    setWord(event.target.value);
  }

  function getData(response) {
    setResults(response.data[0]);
  }

  function getPics(response) {
    setPhotos(response.data.photos);
  }

  return (
    <div>
      <form onSubmit={search}>
        <input
          className="search-bar"
          type="search"
          placeholder="Enter a word..."
          onChange={getWord}
        />
      </form>
      <p className="instr">
        <small>i.e moon, giraffe, pool, coding</small>
      </p>
      <SearchResults data={results} />
      <Photos data={photos} />
    </div>
  );
}
