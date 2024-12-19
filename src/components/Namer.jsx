import {useRef} from 'react';
import UserData from '../Files/UserData';
function Namerington() {
  const nameInputRef = useRef(null);

  const handleRedirect = () => {
    const namer = nameInputRef.current.value;
    if (namer) {

      window.location.href = `/?name=${encodeURIComponent(namer)}`;
    } else {
      alert('Please enter your name!');
    }
  };

  return (
    <div>
      <p>Enter your Name:</p>
      <input
        type="text"
        id="name"
        ref={nameInputRef}
        placeholder="Your name here"
        required
      />
      <button type="button" onClick={handleRedirect}>
        Enter Game
      </button>
    </div>
  );
}

export default Namerington;
