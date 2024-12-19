import React from 'react'
import UserData from "./Files/UserData"
import Namerington from "./components/Namer"
// const UserData = { name: "John" }; // Example data

function Namer() {
  return (
    <>
      <p className="text-[3.5vw] font-semibold m-4">CypherCraft!</p>
      <form action="">
      {UserData.name && <p>Enter your New Name:</p> || <p>Enter your Name:</p>}
        {/* <label htmlFor="name">Enter your name:</label> */}
        <input type="text" id="name" name="name" required/>
        <input type="submit" value="Rename"/>
      </form>
    </>  )
}

{/* <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={inputValue} 
          onChange={(e) => setInputValue(e.target.value)} 
          placeholder="Guess the word"
        />
        <button type="submit">Submit</button>
      </form> */}


export default Namer