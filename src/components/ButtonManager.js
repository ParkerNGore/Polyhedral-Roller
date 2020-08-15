import React from "react";
import "./ButtonManager.css";

function ButtonManager({ handleAddDie, handleRoll }) {
  return (
    <div className="button-manager-container">
      <button className="add-button" onClick={handleAddDie}>
        Add Die
      </button>
      <button className="roll-button" onClick={handleRoll}>
        Roll Dice!
      </button>
    </div>
  );
}

export default ButtonManager;
