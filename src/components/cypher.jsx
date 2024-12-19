import { useEffect, useState } from 'react';
import cypherData from '../Files/Cyphers';
import Styler from "./Styler.jsx";
import GameReturner from "./GameReturner.jsx";
import Guess from "./Guess.jsx";

function Cypher({ level }) {
  const [actualWord, setActualWord] = useState("");
  const [keyData, setKeyData] = useState({
    keysString: "",
    valuesString: "",
  });

  // Function to select a random word and set up cipher keys
  const initializeGame = () => {
    const actualData = cypherData[level];
    const newWord = actualData[Math.floor(Math.random() * actualData.length)];
    setActualWord(newWord);

    const newKeyData = GameReturner(level, newWord, actualData);
    setKeyData({
      keysString: newKeyData.keysString,
      valuesString: newKeyData.valuesString,
    });
  };

  // Initialize game on component mount and when level changes
  useEffect(() => {
    initializeGame();
  }, [level]);

  return (
    <div>
      <h2>Cypher Game</h2>
      <p>Keys: {keyData.keysString}</p>
      <p>Characters: {keyData.valuesString}</p>
      
      {/* Pass actualWord and a callback to reset the game */}
      <Guess actualWord={actualWord} resetGame={initializeGame} />
    </div>
  );
}

export default Cypher;
