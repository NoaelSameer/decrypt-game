import React from 'react'

function Keyer(level, actualWord, actualData, newKeyData) {
    switch(level){
        case "peaceful":
            let j = 0;
            for (let i = 0; i <= actualWord.length; i += 2) {
            j = j+i;
            console.log(j)
              if (newKeyData.key1.length < 2) {
                newKeyData.key1.push(actualWord[i]);
                
              }
              if (newKeyData.key2.length < 2) {
                newKeyData.key2.push(actualWord[i+1]);
              }
            }
            break;
        case "easy":
            

        default:
            console.log("Invalid level");
            break;

    }

}

export default Keyer