import React from "react";
import generateNumber from "./numberGenerator";
import './Lottery.css';

export default () => {
  const [n, setN] = React.useState(6);
  const [li, setLi] = React.useState();
  function onNChange(e) {
    setN(e.target.value);
  }
  function drawNumbers() {
    let numbers = generateNumber(n);
    let els = numbers.map((number) => {
      return <li>{number}</li>;
    });
    setLi(els);
  }
  return (
    <div>
      <div>Drawn Numbers:</div>
      <ul>{li}</ul>
      <label>N</label>
      <input type='number' value={n} onChange={onNChange} />
      <button onClick={drawNumbers}>Draw</button>
    </div>
  );
};
