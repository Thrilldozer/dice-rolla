import React from "react";

const Strength = props => {
  return (
    <section>
      <h3>
        Input your Strength <input id="strengthInput" type="number" onInput={props.handleStrengthUpdate} />
      </h3>
      <h3>You have added {props.strength} to your total</h3>
    </section>
  );
};

export default Strength;