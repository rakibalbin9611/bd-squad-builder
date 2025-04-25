import React from "react";
import { Bounce, ToastContainer } from "react-toastify";

const SinglePlayer = ({ singlePlayer, handleSelectedPlayers }) => {
  // console.log(singlePlayer);
  const { battingType, biddingPrice, bowlingType, country, image, name, role } =
    singlePlayer;
  return (
    <div className="card card-compact w-96 shadow-xl mt-8">
      <figure>
        <img className="w-72 h-60 rounded-lg" src={image} alt="player" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <div className="flex justify-between items-center border-b-2 ">
          <div className="mb-4">
            <h3 className="text-sm font-regular">{country}</h3>
          </div>
          <div className="mb-4">
            <h3 className="text-sm font-regular">{role}</h3>
          </div>
        </div>
        {/* Rating */}

        {/* Rating end */}
        <h2 className="text-xl font-semibold">Rating</h2>
        <div className="flex justify-between items-center">
          <div className="">
            <h3 className="text-sm font-semibold">{battingType}</h3>
          </div>
          <div className="">
            <h3 className="text-sm font-semibold">{bowlingType}</h3>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="">
            <h3 className="text-sm font-semibold">Price:${biddingPrice}</h3>
          </div>
          <div className=" mt-4">
            <button
              onClick={() => handleSelectedPlayers(singlePlayer)}
              className="
  border-2 border-blue-600 
  text-blue-600 hover:bg-blue-50 
  font-medium 
  py-2 px-6 
  rounded-lg 
  transition-colors duration-200
  focus:outline-none focus:ring-2 focus:ring-blue-400
"
            >
              Choose Player
              <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
              ></ToastContainer>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePlayer;
