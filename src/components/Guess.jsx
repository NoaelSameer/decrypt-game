import {useState} from 'react'
function Guess({actualWord}) {
    const [inputValue, setInputValue] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      Checker(inputValue, actualWord);
      setInputValue(''); 
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={inputValue} 
          onChange={(e) => setInputValue(e.target.value)} 
          placeholder="Guess the word"
        />
        <button type="submit">Submit</button>
      </form>
    );
}

function Checker(wordChoice, actualWord) {
    if (wordChoice.toLowerCase() === actualWord.toLowerCase()) {
      alert("Congratulations! You've guessed the word correctly!");
    } else {
      alert("Sorry, that's not the correct word. The word was: " + actualWord);
    }
  }
    

export default Guess