import React from "react";
import { SVGUsers } from "../Utility";

const Refer = () => {
  return (
    <div className="bg-gradient-four shadow-three rounded-10 p-6">
      <h4 className="text-[21px] font-bold text-white">
        Refer and get unmatched perks!
      </h4>
      <div className=" space-y-5">
        <div className="sm:flex sm:space-x-14 border-b border-[#626262] py-4 space-y-5 sm:space-y-0">
          <div className="flex items-center space-x-3 ">
            <h6 className="text-[40px] leading-tight text-primary font-bold">
              50%
            </h6>
            <p className="text-xs_next font-normal text-white">
              Referral Rewards <br />
              from Referral’s Pack Claims
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <h6 className="text-[40px] leading-tight text-primary font-bold">
              3
            </h6>
            <p className="text-xs_next font-normal text-white">
              Levels Activated per pack <br />
              when you have 3 referrals
            </p>
          </div>
        </div>
        <div className="max-w-[750px]">
          <h6 className="text-white text-base font-bold mb-3">
            Share your Invitation Link
          </h6>
          <div className="relative">
            <input
              className="bg-gradient-six rounded-10 shadow-one pl-6 pr-14 py-4 text-[#222222] text-base font-bold focus:outline-none w-full"
              readOnly
              type="text"
              value="https://www.globalaid.club/ref/34"
            />
            <button className="absolute top-1/2 -translate-y-1/2 right-5">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 7V7C14 6.06812 14 5.60218 13.8478 5.23463C13.6448 4.74458 13.2554 4.35523 12.7654 4.15224C12.3978 4 11.9319 4 11 4H8C6.11438 4 5.17157 4 4.58579 4.58579C4 5.17157 4 6.11438 4 8V11C4 11.9319 4 12.3978 4.15224 12.7654C4.35523 13.2554 4.74458 13.6448 5.23463 13.8478C5.60218 14 6.06812 14 7 14V14"
                  stroke="black"
                  strokeWidth="2"
                />
                <rect
                  x="10"
                  y="10"
                  width="10"
                  height="10"
                  rx="2"
                  stroke="black"
                  strokeWidth="2"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="sm:flex items-center justify-between max-w-[750px] space-y-3 sm:space-y-0">
          <div className="flex items-center space-x-3 ">
            <h6 className="text-[40px] leading-tight text-[#AA91F0] font-bold">
              1231
            </h6>
            <p className="text-xs_next font-normal text-white">
              Total <br />
              Referrals
            </p>
          </div>

          <button className="bg-[#3F3578] rounded-10 shadow-one flex items-center justify-between px-5 h-[54px] text-white transition duration-200 w-full text-base  font-bold max-w-[250px] hover:bg-[#002464]">
            My Referrals
            <SVGUsers width="24px" height="24px" fill="#fff" stroke="#fff" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Refer;
