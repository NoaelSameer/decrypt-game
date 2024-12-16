import Cypher from "./components/cypher";
import { useLocation } from "react-router-dom";

function App() {

  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const level = searchParams.get("level");

  
  return (
    <>
      {level ? <p>Current Level: {level}</p> : <p>No level selected</p>}
    </>
  );
}

export default App;