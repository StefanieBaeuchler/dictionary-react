import React from "react";

export default function Phonetics(props) {
  return (
    <div className="Phonetics">
      {props.phonetics.text} <br />
      <a href={props.phonetics.audio} target="_blank" rel="noreferrer">
        Listen
      </a>
    </div>
  );
}
