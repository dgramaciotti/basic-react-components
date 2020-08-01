import React from "react";
export default (props) => {
  const numberSize = props.variable < 0.5 ? "Less than 1/2" : "More than 1/2";
  return (
    <div>
      <h2>{props.title}</h2>
      <h3>{props.subtitle}</h3>
      <h3>
        <strong>
          {props.variable} is {numberSize}
        </strong>
      </h3>
    </div>
  );
};
