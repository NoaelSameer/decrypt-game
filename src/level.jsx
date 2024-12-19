import Cypher from "./components/cypher";
import { useLocation } from "react-router-dom";
import NavBarington from "./components/NavBarington";

function App() {

  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const level = searchParams.get("level");

  
  return (
    <>
     <NavBarington leaderboard="true" rename="" home="true"/>
     <Cypher level={level}/>
      {/* {level ? <p>Current Level: {level}</p> : <p>No level selected</p>} */}
    </>
  );
}

export default App;