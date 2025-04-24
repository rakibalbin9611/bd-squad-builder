import React from "react";
import SelectPlayer from "../SelectPlayer/SelectPlayer";

const SelectedPlayers = ({ selectPlayers, handleDeletePlayer }) => {
  //   console.log(selectPlayers);
  return (
    <div>
      <h2 className="text-3xl font-bold">
        SelectPlayers: ({selectPlayers.length} / 6)
      </h2>
      <div className="space-y-4">
        {selectPlayers.map((selectPlayer) => (
          <SelectPlayer
            handleDeletePlayer={handleDeletePlayer}
            selectPlayer={selectPlayer}
          ></SelectPlayer>
        ))}
      </div>
    </div>
  );
};

export default SelectedPlayers;
