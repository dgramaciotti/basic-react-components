import React from "react";
import Son from "./Son";

export default (props) => {
  const [info, setInfo] = React.useState("???");
  const changeInFather = (info) => {
    setInfo(info);
    console.log('Executed!')
  }
  return (
    <div>
      <div>Father Component</div>
      <div>{info}</div>
      <Son triggerChanges={changeInFather}></Son>
    </div>
  );
};
