import React from "react";
import "./App.css";
import Die from "./components/Die";
import ButtonManager from "./components/ButtonManager";
import "./components/Die.css";

function App() {
  const [dice, setDice] = React.useState([
    {
      id: 1,
      number: 1,
    },
    {
      id: 2,
      number: 1,
    },
  ]);

  React.useEffect(() => {
    const dieContainer = {
      id: 0,
      number: 1,
    };
    const newList = dice.concat(dieContainer);
    setDice(newList);
  }, []);

  function handleAddDie() {
    let nextId = 0;
    dice.map((die) => {
      if (die.id > nextId) {
        nextId = die.id;
      }
    });
    nextId++;

    const newDie = {
      id: nextId,
      number: 1,
    };
    const newList = dice.concat(newDie);
    setDice(newList);
  }

  function handleRoll() {}

  return (
    <div className="App">
      <h1>Welcome To My Polyhedral Roller</h1>
      <div className="dice-container">
        {dice.map((die) => {
          return <Die number={die.number} key={die.id} />;
        })}
      </div>
      <ButtonManager handleAddDie={handleAddDie} handleRoll={handleRoll} />
    </div>
  );
}

export default App;
