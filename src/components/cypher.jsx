import { useEffect, useState } from 'react';
import cypherData from '../Files/Cyphers';
import Keyer from '../components/keyer'
function Cypher({ level }) {
  const actualData = cypherData[level];
  const actualWord = actualData[Math.floor(Math.random() * actualData.length)];

  const [keyData, setkeyData] = useState({
    key1: [],
    key2: [],
    key3: [],
    key4: [],
    key5: [],
  });

  useEffect(() => {
    const newKeyData = {
      key1: [],
      key2: [],
      key3: [],
      key4: [],
      key5: [],
    };

    switch (level) {
      case 'peaceful':
        Keyer(level, actualWord, actualData, newKeyData)
        break;
      case 'easy':
        // Add logic for easy level if needed
        break;
      case 'normal':
        // Add logic for normal level if needed
        break;
      case 'hard':
        // Add logic for hard level if needed
        break;
      default:
        console.error(`Invalid level: ${level}`);
        return;
    }

    // Update keyData state with newKeyData
    setkeyData(newKeyData);
  }, [actualWord, level]); // Make sure the effect runs when either actualWord or level changes

  return (
    <>
      <p>Key 1: {keyData.key1.join('')}</p>
      <p>Key 2: {keyData.key2.join('')}</p>
      <p>Key 3: {keyData.key3.join('')}</p>
      <p>Key 4: {keyData.key4.join('')}</p>
      <p>Key 5: {keyData.key5.join('')}</p>
      <p>Random Word: {actualWord}</p>
      <p>All Words for Level: {JSON.stringify(actualData)}</p>
      <p>Level: {level}</p>
    </>
  );
}

export default Cypher;
