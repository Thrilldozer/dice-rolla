import React from "react";

const RollButton = props => {
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * max) + min;
  }

  function handleRollClick() {
    const roll = getRandomNumber(1, 20);

    switch (true) {
      case roll >= 11:
        return props.onRoll({
          score: roll,
          damage: getRandomNumber(6, 12)
        });
      case roll >= 6 && roll < 11:
        return props.onRoll({
          score: roll,
          damage: getRandomNumber(1, 6)
        });
      default:
        return props.onRoll({
          score: roll,
          damage: 0
        });
    }
  }

  return (
    <button disabled={props.disabled} type="button" onClick={handleRollClick}>
      Roll
    </button>
  );
};

export default RollButton;