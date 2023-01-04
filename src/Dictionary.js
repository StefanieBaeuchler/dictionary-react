import React, { useState } from "react";
import Results from "./Results";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("sunset");
  const [results, setResults] = useState(null);
  const [loaded, setLoaded]= useState (false);

  function handleResponse (response){
    setResults(response.data[0]);

  }

function search (){
let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;

axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();  
  }

  function updateKeyword(event) {
    setKeyword(event.target.value);
  }

function load(){
  setLoaded(true);
  search();
}

  if (loaded){
  return (
    <div className="Dictionary">
      <div className="firstSection">
        <h2>📚 Dictionary</h2>
        <h3>What word do you want to look up?</h3>
        <form onSubmit={handleSubmit}>
          <input type="search" onChange={updateKeyword} />
        </form>
        <div className="Hints">suggested words: sunset, house, food...</div>
      </div>

      <Results results={results} />
    </div>
  );
}else{
  load();
  return "Loading";
}
}
