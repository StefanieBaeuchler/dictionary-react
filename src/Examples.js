import React from "react";

export default function Examples (props) {
    if (props.examples){
        return (
          <div className="Examples">
            <strong>Example: </strong> {props.examples}
          </div>
        );
    } else {
        return null;
    }
}