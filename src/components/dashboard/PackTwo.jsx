import React from "react";
import { Button } from "../Utility";

const PackTwo = () => {
  return (
    <div className="bg-gradient-five shadow-one rounded-10 px-4 sm:px-6 py-4 lg:flex items-center justify-between space-y-4 lg:space-y-0">
      <div className="grid grid-cols-2 gap-4 sm:flex sm:space-x-10 md:space-x-16">
        <div>
          <strong className="text-3xl leading-tight text-primary font-bold mb-2">
            <span className="text-base">#</span>105
          </strong>
          <p className="text-base font-normal leading-tight text-white">
            Pack Id
          </p>
        </div>
      </div>
      <div className="flex items-center justify-end space-x-4">
        <button className="bg-[#D33838] rounded-[5px] shadow-one cursor-pointer inline-flex items-center justify-center text-white text-xs_next sm:text-sm font-bold transition-all duration-200 hover:bg-red-800 h-[49px] px-4 sm:px-6 leading-tight">
          1312 More legs or 3 New Referrals <br className="hidden sm:block" />{" "}
          required to activate
        </button>
        <button className="bg-[#7969A6] rounded-[5px] shadow-one cursor-pointer inline-flex items-center justify-center min-w-[49px] w-[49px] h-[49px] transition-all duration-200 hover:bg-[#002464]">
          <svg
            width="37"
            height="37"
            viewBox="0 0 37 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M27.75 13.875L18.5 23.125L9.25 13.875"
              stroke="white"
              strokeWidth="2"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default PackTwo;
