import { useEffect, useState } from 'react';
import cypherData from '../Files/Cyphers';
import {Keyer, numbero} from '../components/keyer'
import shuffleArray from "../components/ArrayShuffler"
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
    Keyer(level, actualWord, actualData, newKeyData)

    Object.keys(newKeyData).forEach((key) => {
      if (newKeyData[key].length > 0) {
        const maxLength = key === "key5" ? 1 : numbero; // Key5 max length is 1, others are 4
        while (newKeyData[key].length < maxLength) {
          newKeyData[key].push("-"); // Pad with "-"
        }
      }
    });

    Object.keys(newKeyData).forEach(key =>{
      newKeyData[key] = shuffleArray(newKeyData[key])
    })

    setkeyData(newKeyData);
  }, [actualWord, level]); // Make sure the effect runs when either actualWord or level changes

  return (
    <>
  {/* {JSON.stringify(keyData)} */}
  <p>Random Word: {actualWord}</p>
      <p>All Words for Level: {JSON.stringify(actualData)}</p>
      <p>Level: {level}</p>
    </>
  );
}

export default Cypher;
