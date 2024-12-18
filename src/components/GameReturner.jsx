import { Keyer, numbero } from './Keyer.jsx';
import shuffleArray from './ArrayShuffler.jsx';

function GameReturner(level, actualWord, actualData) {
  const newKeyData = {
    key1: [],
    key2: [],
    key3: [],
    key4: [],
    key5: [],
  };

  Keyer(level, actualWord, actualData, newKeyData);

  Object.keys(newKeyData).forEach((key) => {
    if (newKeyData[key].length > 0) {
      const maxLength = key === "key5" ? 1 : numbero;
      while (newKeyData[key].length < maxLength) {
        newKeyData[key].push("-");
      }
    }
  });

  const shuffledKeys = ["key1", "key2", "key3", "key4", "key5"]
    .filter(key => newKeyData[key].length > 0)  
    .sort(() => Math.random() - 0.5);  

  const shuffledObject = {};
  shuffledKeys.forEach(key => {
    shuffledObject[key] = newKeyData[key];
  });

  const keysString = shuffledKeys.map(key => key.replace("key", "")).join(", ");
  const valuesString = shuffledKeys.map(key => newKeyData[key].join(""));

  return { keysString, valuesString }; 
}

export default GameReturner;
