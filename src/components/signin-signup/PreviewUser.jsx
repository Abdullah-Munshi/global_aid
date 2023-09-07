import React from "react";
import { TitleSecondary } from "../Utility";

const PreviewUser = () => {
  return (
    <div className="text-center lg:text-left">
      <TitleSecondary
        heading="View user"
        text="View any user’s dashboard by entering
their ID or wallet address."
      />
      <input
        placeholder="Enter User ID"
        className="text-primary placeholder-[#8C85B6] rounded-10 bg-[#1F212E] px-6 py-5 w-[300px] text-lg mb-5 border border-transparent  focus:outline-none focus:border-primary transition duration-200 shadow-five"
      />

      <button className="border-[2px] border-primary rounded-10 text-primary text-[20px] font-bold flex items-center justify-between px-4 pl-6 h-[70px] w-[300px] mx-auto lg:mx-0">
        View User
        <svg
          width="34"
          height="34"
          viewBox="0 0 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M25.2104 29.3334C24.7261 27.8272 23.6589 26.4963 22.1745 25.5471C20.69 24.5979 18.8711 24.0833 17 24.0833C15.1289 24.0833 13.31 24.5979 11.8255 25.5471C10.3411 26.4963 9.27392 27.8272 8.78963 29.3334"
            stroke="#01F502"
            strokeWidth="2"
          />
          <circle
            cx="17"
            cy="14.1667"
            r="4.25"
            stroke="#01F502"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <rect
            x="3.83333"
            y="3.83334"
            width="26.3333"
            height="26.3333"
            rx="3"
            stroke="#01F502"
            strokeWidth="2"
          />
        </svg>
      </button>
    </div>
  );
};

export default PreviewUser;
