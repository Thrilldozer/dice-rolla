import React from "react";

const RollText = props => {
  return <h3 className="diceButton__score">Your roll is {props.score}</h3>;
};

export default RollText;