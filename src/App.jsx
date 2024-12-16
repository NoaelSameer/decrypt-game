function App() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
      <p className="text-[3.5vw] font-semibold m-4">The Cypher Game!</p>
      <a
        href="/level?level=peaceful"
        className="px-[2vw] py-[1vh] bg-blue-500 text-white rounded hover:bg-blue-600">Peaceful Edition</a>
    </div>
  );
}

export default App;
