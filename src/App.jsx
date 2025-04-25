import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Banner from "./Components/Banner/Banner";
import Players from "./Components/Players/Players";
import SelectedPlayers from "./Components/SelectedPlayers/SelectedPlayers";
import { toast } from "react-toastify";

const App = () => {
  const [coins, setCoins] = useState(5000);
  const [selectPlayers, setSelectedPlayers] = useState([]);

  const handleDeletePlayer = (playerId) => {
    const updatedList = selectPlayers.filter(
      (player) => player.playerId !== playerId
    );
    setSelectedPlayers(updatedList);
  };

  const handleSelectedPlayers = (singlePlayer) => {
    const alreadySelected = selectPlayers.find(
      (p) => p.playerId == singlePlayer.playerId
    );
    if (alreadySelected) {
      toast("Already selected");
      return;
    }
    if (singlePlayer.biddingPrice > coins) {
      toast("You dont have enough coins!");
      return;
    }
    if (selectPlayers.length > 5) {
      toast("You can select a maximum of 6 players!");
      return;
    }

    setSelectedPlayers([...selectPlayers, singlePlayer]);

    setCoins(coins - singlePlayer.biddingPrice);
  };

  const handleClaimCredit = () => {
    setCoins(coins + 500);
  };
  return (
    <div className="container mx-auto">
      <Navbar coins={coins}></Navbar>
      <Banner handleClaimCredit={handleClaimCredit}></Banner>
      <main>
        <Players
          selectPlayers={selectPlayers}
          handleSelectedPlayers={handleSelectedPlayers}
        ></Players>
        <SelectedPlayers
          handleDeletePlayer={handleDeletePlayer}
          selectPlayers={selectPlayers}
        ></SelectedPlayers>
      </main>
    </div>
  );
};

export default App;
