import React from "react";
import "./Phonetic.css";

export default function Phonetics(props) {
  if (props.phonetics.audio) {
    return (
      <div className="Phonetics">
        <a href={props.phonetics.audio} target="_blank" rel="noreferrer">
          Listen
        </a>{" "}
        {props.phonetics.text}
      </div>
    );
  
  } else {
    return null;
  }
}
