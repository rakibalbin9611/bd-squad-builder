import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Banner from "./Components/Banner/Banner";
import Players from "./Components/Players/Players";

const App = () => {
  const [coins, setCoins] = useState(0);

  const handleClaimCredit = () => {
    setCoins(coins + 100);
  };
  return (
    <div className="container mx-auto">
      <Navbar coins={coins}></Navbar>
      <Banner handleClaimCredit={handleClaimCredit}></Banner>
      <main>
        <Players></Players>
      </main>
    </div>
  );
};

export default App;
