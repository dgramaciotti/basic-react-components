import React from "react";

export default (props) => {
  let { min, max } = props;
  let drawn = Math.ceil(Math.random() * (max - min));
  return (
    <div>
      <h1>Random number</h1>
      <h2>
        Generating a random number between {min} and {max}
      </h2>
      <h2>{drawn}</h2>
    </div>
  );
};
