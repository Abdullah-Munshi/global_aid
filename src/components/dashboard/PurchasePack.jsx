import React from "react";
import { Button, SVGLightingRound } from "../Utility";

const PurchasePack = () => {
  return (
    <div className="bg-gradient-two rounded-10 shadow-one p-6 text-center">
      <h5 className="text-black text-2xl font-bold leading-tight mb-3">
        Purchase Pack
      </h5>
      <div className="flex items-center justify-center space-x-2">
        <strong className="text-black text-[40px] font-bold leading-tight">
          $50
        </strong>
        <span className="text-black font-normal text-xs_next leading-tight block text-left">
          Cost per Pack <br />
          One Time
        </span>
      </div>
      <Button className="bg-[#3F3578] rounded-10 shadow-one flex items-center justify-between px-5 h-[54px] text-white transition duration-200 w-full text-base  font-bold max-w-[280px] mx-auto my-4 hover:bg-[#002464]">
        Click to Purchase
        <SVGLightingRound width="29" height="29" stroke="#fff" />
      </Button>

      <p className="text-black font-normal text-base mb-6">
        You can purchase unlimited packs
      </p>

      <div className="flex justify-center items-center space-x-4 border-t border-[#95978A] p-5 pb-0 mt-5">
        <div>
          <svg
            width="49"
            height="49"
            viewBox="0 0 49 49"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.5348 27.3857L15.6858 26.854C14.158 26.7151 13.3941 26.6457 13.1515 26.1231C12.9088 25.6005 13.3487 24.9721 14.2285 23.7153L25.1029 8.18044C25.684 7.35017 25.9746 6.93503 26.2253 7.02331C26.4759 7.11158 26.4422 7.6172 26.3748 8.62842L25.6507 19.4894V19.4894C25.5894 20.4096 25.5587 20.8697 25.8231 21.1794C26.0875 21.489 26.5467 21.5308 27.4652 21.6143L33.3142 22.146C34.842 22.2849 35.6059 22.3543 35.8485 22.8769C36.0912 23.3995 35.6513 24.0279 34.7715 25.2847L23.8971 40.8196C23.316 41.6498 23.0254 42.065 22.7747 41.9767C22.5241 41.8884 22.5578 41.3828 22.6252 40.3716L23.3493 29.5106C23.4106 28.5904 23.4413 28.1303 23.1769 27.8206C22.9125 27.511 22.4533 27.4692 21.5348 27.3857Z"
              fill="#222222"
            />
            <path
              d="M37.7708 8.16667L34.7083 12.25H38.7916L35.7291 16.3333"
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13.2708 32.6667L10.2083 36.75H14.2916L11.2291 40.8333"
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div className="text-left">
          <p className="text-black text-xs_next font-normal mb-1">
            Each pack will earn you{" "}
          </p>
          <strong className="block text-black text-2xl font-bold leading-tight">
            $300,000+
          </strong>
        </div>
      </div>
    </div>
  );
};

export default PurchasePack;
