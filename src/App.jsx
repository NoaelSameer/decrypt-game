import NavBarington from './components/NavBarington';

function App() {
  return (
    <>
        <NavBarington leaderboard="true" rename="true" home=""/>
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
      <p className="text-[3.5vw] font-semibold m-4">CypherCraft!</p>
      <a
        href="/level?level=peaceful"
        className="px-[2vw] py-[1vh] bg-blue-500 text-white rounded hover:bg-blue-600">Peaceful Edition
      </a>
      <a
        href="/level?level=easy"
        className="px-[2vw] py-[1vh] bg-blue-500 text-white rounded hover:bg-blue-600">Easy Edition
      </a>
      <a
        href="/level?level=normal"
        className="px-[2vw] py-[1vh] bg-blue-500 text-white rounded hover:bg-blue-600">Normal Edition
      </a>
      <a
        href="/level?level=hard"
        className="px-[2vw] py-[1vh] bg-blue-500 text-white rounded hover:bg-blue-600">Hard Edition
      </a>
    </div>  

    </>

  );

}

export default App;
