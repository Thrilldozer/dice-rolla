import React from "react";

const DamageText = props => {
  let damageText = 0;

  switch (true) {
    case props.score === 20:
      damageText = `CRITICAL HIT ${props.damage}!`;
      break;
    case props.score >= 11:
      damageText = `Your damage was ${props.damage}.`;
      break;
    default:
      damageText = "You Missed!";
      break;
  }

  return <h3>{damageText}</h3>;
};

export default DamageText;