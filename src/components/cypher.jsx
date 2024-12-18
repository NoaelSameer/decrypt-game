import { useEffect, useState } from 'react';
import cypherData from '../Files/Cyphers';
import Styler from "./Styler.jsx";
import GameReturner from "./GameReturner.jsx";
import Guess from "./Guess.jsx"
function Cypher({ level }) {
  const actualData = cypherData[level];
  const actualWord = actualData[Math.floor(Math.random() * actualData.length)];

  const [keyData, setKeyData] = useState({
    key1: [],
    key2: [],
    key3: [],
    key4: [],
    key5: [],
  });

  const [keysString, setKeysString] = useState('');
  const [valuesString, setValuesString] = useState('');

  useEffect(() => {
    const newKeyData = GameReturner(level, actualWord, actualData);

    setKeysString(newKeyData.keysString);
    setValuesString(newKeyData.valuesString);
  }, [actualWord, level]);

  // Guess(actualWord)

  // function WordGuessingGame({ actualWord }) {
    // const [inputValue, setInputValue] = useState('');
  
  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     Checker(inputValue, actualWord);
  //     setInputValue('');  // Clear the input after submission
  //   };
  
  //   return (
  //     <form onSubmit={handleSubmit}>
  //       <input 
  //         type="text" 
  //         value={inputValue} 
  //         onChange={(e) => setInputValue(e.target.value)} 
  //         placeholder="Guess the word"
  //       />
  //       <button type="submit">Submit</button>
  //     </form>
  //   );
  // }

  return (
    <div>
      <h2>Cypher Game</h2>
      <p>Keys: {keysString}</p>
      {/* Render the WordGuessingGame and pass actualWord as a prop */}
      <p>Characters: {valuesString}</p>
      <Guess actualWord={actualWord} />

      <p>{actualWord}</p>
    </div>
  );
}

export default Cypher;
