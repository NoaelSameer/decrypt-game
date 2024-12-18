import React from 'react'
let numbero = 0
function Keyer(level, actualWord, actualData, newKeyData) {
    switch(level){
        case "peaceful":
            for (let i = 0; i <= actualWord.length; i += 2) {
              if (newKeyData.key1.length < 2) {
                newKeyData.key1.push(actualWord[i]);
                
              }
              if (newKeyData.key2.length < 2) {
                newKeyData.key2.push(actualWord[i+1]);
              }
            }
            numbero = 2
            break;
        case "easy":
          for (let i = 0; i <= actualWord.length; i += 3) {
              if (newKeyData.key1.length < 3) {
                newKeyData.key1.push(actualWord[i]);
                
              }
              if (newKeyData.key2.length < 3) {
                newKeyData.key2.push(actualWord[i+1]);
              }
              if (newKeyData.key3.length < 3) {
                newKeyData.key3.push(actualWord[i+2]);

          }
        }
          numbero = 3
          break;
          case "normal":
            for (let i = 0; i < actualWord.length; i += 4) {
              if (newKeyData.key1.length < 4) {
                newKeyData.key1.push(actualWord[i] || "-");
              }
              if (newKeyData.key2.length < 4) {
                newKeyData.key2.push(actualWord[i + 1] || "-");
              }
              if (newKeyData.key3.length < 4) {
                newKeyData.key3.push(actualWord[i + 2] || "-");
              }
              if (newKeyData.key4.length < 4) {
                newKeyData.key4.push(actualWord[i + 3] || "-");
              }
            }
            numbero = 4
            break;
        case "hard":
          for (let i = 0; i < actualWord.length; i += 5) {
            if (newKeyData.key1.length < 5) {
                newKeyData.key1.push(actualWord[i] || "-");
              }
              if (newKeyData.key2.length < 5) {
                newKeyData.key2.push(actualWord[i + 1] || "-");
              }
              if (newKeyData.key3.length < 5) {
                newKeyData.key3.push(actualWord[i + 2] || "-");
              }
              if (newKeyData.key4.length < 5) {
                newKeyData.key4.push(actualWord[i + 3] || "-");
              }
              if (newKeyData.key5.length < 5) {
                newKeyData.key5.push(actualWord[i + 4] || "-");
              }
            }
            numbero = 5
          break;
            

        default:
            console.log("Invalid level");
            break;

    }

}

export { Keyer, numbero };
