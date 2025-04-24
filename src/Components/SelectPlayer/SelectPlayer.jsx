import React from "react";

const SelectPlayer = ({ selectPlayer, handleDeletePlayer }) => {
  //   console.log(selectPlayer);
  const { name, image, playerId } = selectPlayer;
  return (
    <div>
      <div className="flex justify-between items-center space-y-4">
        <div className="flex items-center gap-6 ">
          <img
            className="w-10 h-10 rounded-full object-cover"
            src={image}
            alt=""
          />
          <h3 className="text-xl font-regular">{name}</h3>
        </div>
        <div>
          <button
            onClick={() => handleDeletePlayer(playerId)}
            className="btn btn-error"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectPlayer;
