import React from "react";
import "./Die.css";

function Die({ number }) {
  return (
    <div className="dice">
      <ol className="die-list roll-1" data-roll={number}>
        <li className="die-item" data-side="1">
          <div className="number">1</div>
        </li>
        <li className="die-item" data-side="2">
          <div className="number">2</div>
        </li>
        <li className="die-item" data-side="3">
          <div className="number">3</div>
        </li>
        <li className="die-item" data-side="4">
          <div className="number">4</div>
        </li>
        <li className="die-item" data-side="5">
          <div className="number">5</div>
        </li>
        <li className="die-item" data-side="6">
          <div className="number">6</div>
        </li>
      </ol>
    </div>
  );
}

export default Die;
