import React, { useEffect, useState } from "react";
import SinglePlayer from "../SinglePlayer/SinglePlayer";

const Players = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch("../../../public/players.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);
  return (
    <div className="my-20 p-4">
      <div className="md:flex justify-between items-center text-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">Available Players</h2>
        </div>
        <div className="mt-6">
          <button
            className="
        relative overflow-hidden
        bg-gradient-to-br from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700
        text-white font-medium
        py-2 px-5 sm:py-2.5 sm:px-6
        rounded-lg sm:rounded-xl
        shadow hover:shadow-yellow-500/30
        transition-all duration-200
        hover:-translate-y-0.5
        active:scale-95
        focus:outline-none focus:ring-2 focus:ring-yellow-400/50
        text-sm sm:text-base
      "
          >
            <span className="relative z-10 block">Available</span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400/60"></span>
          </button>
          {/* Selected button */}
          <button
            className="ml-4
        relative overflow-hidden
        bg-gradient-to-br from-purple-500 to-violet-600 hover:from-purple-600 hover:to-violet-700
        text-white font-medium
        py-2 px-5 sm:py-2.5 sm:px-6
        rounded-lg sm:rounded-xl
        shadow hover:shadow-purple-500/30
        transition-all duration-200
        hover:-translate-y-0.5
        active:scale-95
        focus:outline-none focus:ring-2 focus:ring-purple-400/50
        text-sm sm:text-base
      "
          >
            <span className="relative z-10 block">Selected (0)</span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-400/60"></span>
          </button>
        </div>
      </div>
      {/* Players..... */}
      <div>
        <h2 className="text-3xl font-bold">Players: {players.length}</h2>
        {players.map((singlePlayer) => (
          <SinglePlayer
            key={singlePlayer.id}
            singlePlayer={singlePlayer}
          ></SinglePlayer>
        ))}
      </div>
    </div>
  );
};

export default Players;
