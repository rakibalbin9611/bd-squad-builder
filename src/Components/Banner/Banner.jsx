import React from "react";
import bannerPic from "../../assets/banner-main.png";

const Banner = ({ handleClaimCredit }) => {
  return (
    <div className="text-center bg-gradient-to-r from-[#1f1c2c] via-[#928DAB] to-[#1f1c2c] mx-8 md:py-14 p-5 rounded-2xl shadow-xl border border-white/10">
      <div className="flex items-center justify-center">
        <img className="w-32 md:w-60" src={bannerPic} />
      </div>
      <div className="mt-4 md:mt-10 space-y-2 md:space-y-8 ">
        <h2 className="text-2xl md:text-5xl font-bold text-white">
          Unleash Your Inner Selector with BD Squad Builder
        </h2>
        <h3 className=" text-base md:text-2xl font-medium text-[#FFFFFFB3]">
          Beyond Boundaries Beyond Limits
        </h3>
        {/* <button class="bg-yellow-400 text-black font-semibold rounded-full px-6 py-3 shadow-lg border border-yellow-500 hover:bg-yellow-500 hover:border-yellow-600 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
          🎁Claim Free Credit
        </button> */}
        <button
          onClick={handleClaimCredit}
          className={`
        /* Base styles (mobile-first) */
        relative overflow-hidden group 
        bg-gradient-to-br from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700
        text-white font-bold
        py-2 px-4 sm:py-3 sm:px-6 md:py-3 md:px-8  /* Responsive padding */
        rounded-lg sm:rounded-xl  /* Responsive rounded corners */
        shadow-md hover:shadow-amber-500/40
        transition-all duration-300
        hover:-translate-y-0.5 sm:hover:-translate-y-1  /* Stronger lift on larger screens */
        active:translate-y-0 active:scale-95  /* Press-down effect */
        focus:outline-none focus:ring-2 focus:ring-amber-400/80  /* Accessibility focus state */

        /* Responsive text sizing */
        text-sm sm:text-base md:text-lg
      `}
        >
          {/* Shine effect (responsive height) */}
          <span
            className="
          absolute top-0 left-0 w-full 
          h-1/3 sm:h-1/2  /* Thicker shine on larger screens */
          bg-gradient-to-t from-white/10 to-transparent 
          opacity-0 group-hover:opacity-100 
          transition-opacity duration-500
        "
          />

          {/* Button text with hover scale effect */}
          <span
            className="
          relative z-10 block 
          tracking-wide  /* Slightly wider letter spacing */
          group-hover:scale-105  /* Subtle text pop on hover */
          transition-transform duration-200
        "
          >
            CLAIM FREE CREDIT
          </span>

          {/* Bottom accent bar (responsive thickness) */}
          <span
            className="
          absolute bottom-0 left-0 w-full 
          h-0.5 sm:h-1  /* Thicker bar on larger screens */
          bg-amber-400/50 group-hover:bg-amber-400/80 
          transition-colors duration-300
        "
          />
        </button>
      </div>
    </div>
  );
};

export default Banner;
