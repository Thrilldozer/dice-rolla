import React, { useState } from "react";
import RollButton from "../roll-button/RollButton";
import DamageText from "../damage-text/DamageText";
import Strength from "../strength/Strength";
import RollText from "../roll-text/RollText";

const DiceTwenty = () => {
  const [stats, setStats] = useState({
    score: 0,
    damage: 0
  });

  const [strength, setStrength] = useState(0);

  function handleStatsUpdate(newStats) {
    setStats(newStats);
  }

  function handleStrengthUpdate(event) {
    const { value } = event.target;
    const newStrength = Number(value);
    setStrength(newStrength);
  }

  const modifiedDamage = stats.damage + strength;

  const buttonDisabled = !strength;

  return (
    <section className="diceButton">
      <Strength
        handleStrengthUpdate={handleStrengthUpdate}
        strength={strength}
      />
      <RollButton disabled={buttonDisabled} onRoll={handleStatsUpdate} />
      <RollText score={stats.score} />
      <DamageText score={stats.score} damage={modifiedDamage} />
    </section>
  );
};

export default DiceTwenty;