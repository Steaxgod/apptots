import React from "react";

export const Card = (props) => {
  return (
    <div className="card" style={props.style}>
      {props.children}
    </div>
  );
};
