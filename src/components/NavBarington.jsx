import React from 'react'

function NavBarington({leaderboard, rename, home }) {

  return (
    <>
      <nav className="flex justify-between p-4 bg-gray-800">
        <div className="flex items-center">
        {leaderboard && <a href="/leaderboard" className="text-white hover:text-gray-400">Leaderboard</a>}
        </div>
        <ul className="flex items-center space-x-4">
          {rename && <li><a href="/Namer" className="text-white hover:text-gray-400">Rename</a></li>}
          {home && <li><a href="/" className="text-white hover:text-gray-400">Home</a></li>}
        </ul>
      </nav>
    </>
  )
}

export default NavBarington