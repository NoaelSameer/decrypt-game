import { useState } from "react";

function Guess({ actualWord, resetGame }) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.toLowerCase() === actualWord.toLowerCase()) {
      alert("Congratulations! You've guessed the word correctly!");
      setInputValue(""); // Clear the input
      resetGame(); // Start a new game
    } else {
      alert(`Sorry, that's not the correct word.`);
    }

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

export default Guess;
