import NavBarington from './components/NavBarington';
import UserData from './Files/UserData';
import { useLocation } from "react-router-dom";
import Namerington from './components/Namer';
function App() {

  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const name = searchParams.get("name");

  if(name){return (
    <>
        <NavBarington leaderboard="true" rename="true" home=""/>
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
      <p className="text-[3.5vw] font-semibold m-4">CypherCraft!</p>
      <a
        href={`/level?level=peaceful&name=${name}`}
        className="px-[2vw] py-[1vh] bg-blue-500 text-white rounded hover:bg-blue-600">Peaceful Edition
      </a>
      <a
       href={`/level?level=easy&name=${name}`}
        className="px-[2vw] py-[1vh] bg-blue-500 text-white rounded hover:bg-blue-600">Easy Edition
      </a>
      <a
       href={`/level?level=normal&name=${name}`}
        className="px-[2vw] py-[1vh] bg-blue-500 text-white rounded hover:bg-blue-600">Normal Edition
      </a>
      <a
       href={`/level?level=hard&name=${name}`}
        className="px-[2vw] py-[1vh] bg-blue-500 text-white rounded hover:bg-blue-600">Hard Edition
      </a>
    </div>  
    </>
  );
}else{
  return<>
<body className='bg-[url("https://res.cloudinary.com/dxsd4uv7m/image/upload/v1734642586/Firefly_create_a_minecraft_themed_background_for_my_website_leave_the_center_not_too_detailed_make_3_rb82ar.jpg")] h-screen bg-cover bg-no-repeat bg-center'>
<div className="flex flex-col items-center bg-gray-100 my-5">
    <p className="text-[3.5vw] font-semibold m-4">CypherCraft!</p>
    </div>
  {/* <NavBarington leaderboard="false" rename="true" home="true"/> */}
  {/* <p className="text-[3.5vw] font-semibold m-4">CypherCraft!</p> */}
  <Namerington />
  </body>
  </>
}

}

export default App;
