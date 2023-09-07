import React from "react";
import { Link } from "react-router-dom";
import dashboardBg from "../assets/dashboard-bg.png";
import logo from "../assets/logo.png";
import { TitleSecondary } from "../components/Utility";
import PreviewUser from "../components/signin-signup/PreviewUser";
const Login = () => {
  return (
    <div className="min-h-screen bg-[#0B002B] relative font-inria-sans">
      <div
        className="w-full h-full absolute top-0 start-0 bottom-0 end-0 bg-cover bg-center rounded-bl-2xl rounded-br-2xl"
        style={{ backgroundImage: `url(${dashboardBg})` }}
      ></div>
      <div className="min-h-screen flex flex-col justify-center z-10 relative">
        <main className="mb-[60px] md:mb-[75px]">
          <div className="px-4 md:px-11 lg:px-0 max-w-[850px] mx-auto">
            <div className="text-center my-6">
              <img src={logo} className="w-[220px] mx-auto" alt="" />
            </div>
            <div className="md:grid grid-cols-2 items-center gap-6 lg:gap-0 space-y-10 md:space-y-0 max-w-md mx-auto md:mx-0 md:max-w-none relative">
              <div className="bg-gradient-seven rounded-10 shadow-four p-14">
                <TitleSecondary
                  heading="Login"
                  text="Connect wallet to login"
                />
                <button className="bg-gradient-two rounded-10 shadow-one flex items-center justify-between text-[22px] text-black font-bold h-[70px] w-full max-w-[320px] pl-8 pr-4 relative">
                  <span className="absolute font-bold text-white text-[103px] leading-[64px] top-0 inline-block -left-[18px]">
                    1
                  </span>
                  Connect Wallet
                  <svg
                    width="37"
                    height="37"
                    viewBox="0 0 37 37"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.41255 22.6508L9.27981 23.1419L8.41254 22.6509C8.27566 22.8926 8.21059 23.1563 8.15919 23.3646C8.15452 23.3835 8.14997 23.402 8.14548 23.4199L6.94028 28.2407C6.93748 28.2519 6.93456 28.2635 6.93154 28.2755C6.89472 28.422 6.84372 28.6249 6.82615 28.8045C6.80593 29.0112 6.79924 29.4632 7.16802 29.832L7.87513 29.1249L7.16803 29.832C7.5368 30.2007 7.98876 30.1941 8.19545 30.1738C8.37507 30.1563 8.578 30.1053 8.72449 30.0684C8.73648 30.0654 8.7481 30.0625 8.7593 30.0597L13.5801 28.8545C13.598 28.85 13.6165 28.8455 13.6354 28.8408C13.8437 28.7894 14.1074 28.7243 14.3491 28.5874C14.5909 28.4505 14.7823 28.2579 14.9336 28.1058C14.9473 28.0919 14.9607 28.0785 14.9738 28.0654L27.0429 15.9963C27.0557 15.9835 27.0685 15.9707 27.0813 15.9579C27.3813 15.6581 27.6727 15.3667 27.8808 15.094C28.1153 14.7866 28.3358 14.3887 28.3358 13.875C28.3358 13.3613 28.1153 12.9634 27.8808 12.656C27.6727 12.3833 27.3813 12.0919 27.0813 11.7921C27.0685 11.7793 27.0557 11.7665 27.0429 11.7537L25.2463 9.95711C25.2335 9.94427 25.2206 9.93144 25.2078 9.91863C24.908 9.61871 24.6167 9.32723 24.344 9.11919C24.0366 8.88466 23.6386 8.66421 23.125 8.66421C22.6113 8.66421 22.2134 8.88466 21.906 9.11919C21.6333 9.32723 21.3419 9.61871 21.0421 9.91863C21.0293 9.93144 21.0165 9.94427 21.0037 9.95711L8.93459 22.0262C8.92151 22.0393 8.90803 22.0526 8.89422 22.0664C8.74205 22.2176 8.54943 22.4091 8.41255 22.6508Z"
                      stroke="black"
                      stroke-width="2"
                    />
                    <path
                      d="M19.2708 11.5625L23.8958 8.47917L28.5208 13.1042L25.4375 17.7292L19.2708 11.5625Z"
                      fill="black"
                    />
                  </svg>
                </button>
                <p className="text-white text-sm font-bold mt-3 mb-6">
                  Wallet Connected : 0x13121..12123
                </p>
                <button className="bg-gradient-two rounded-10 shadow-one flex items-center justify-between text-[22px] text-black font-bold h-[70px] w-full max-w-[320px] pl-8 pr-4 relative">
                  <span className="absolute font-bold text-white text-[103px] leading-[64px] top-0 inline-block -left-[20px]">
                    2
                  </span>
                  Login Now
                  <svg
                    width="37"
                    height="37"
                    viewBox="0 0 37 37"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.41255 22.6508L9.27981 23.1419L8.41254 22.6509C8.27566 22.8926 8.21059 23.1563 8.15919 23.3646C8.15452 23.3835 8.14997 23.402 8.14548 23.4199L6.94028 28.2407C6.93748 28.2519 6.93456 28.2635 6.93154 28.2755C6.89472 28.422 6.84372 28.6249 6.82615 28.8045C6.80593 29.0112 6.79924 29.4632 7.16802 29.832L7.87513 29.1249L7.16803 29.832C7.5368 30.2007 7.98876 30.1941 8.19545 30.1738C8.37507 30.1563 8.578 30.1053 8.72449 30.0684C8.73648 30.0654 8.7481 30.0625 8.7593 30.0597L13.5801 28.8545C13.598 28.85 13.6165 28.8455 13.6354 28.8408C13.8437 28.7894 14.1074 28.7243 14.3491 28.5874C14.5909 28.4505 14.7823 28.2579 14.9336 28.1058C14.9473 28.0919 14.9607 28.0785 14.9738 28.0654L27.0429 15.9963C27.0557 15.9835 27.0685 15.9707 27.0813 15.9579C27.3813 15.6581 27.6727 15.3667 27.8808 15.094C28.1153 14.7866 28.3358 14.3887 28.3358 13.875C28.3358 13.3613 28.1153 12.9634 27.8808 12.656C27.6727 12.3833 27.3813 12.0919 27.0813 11.7921C27.0685 11.7793 27.0557 11.7665 27.0429 11.7537L25.2463 9.95711C25.2335 9.94427 25.2206 9.93144 25.2078 9.91863C24.908 9.61871 24.6167 9.32723 24.344 9.11919C24.0366 8.88466 23.6386 8.66421 23.125 8.66421C22.6113 8.66421 22.2134 8.88466 21.906 9.11919C21.6333 9.32723 21.3419 9.61871 21.0421 9.91863C21.0293 9.93144 21.0165 9.94427 21.0037 9.95711L8.93459 22.0262C8.92151 22.0393 8.90803 22.0526 8.89422 22.0664C8.74205 22.2176 8.54943 22.4091 8.41255 22.6508Z"
                      stroke="black"
                      stroke-width="2"
                    />
                    <path
                      d="M19.2708 11.5625L23.8958 8.47917L28.5208 13.1042L25.4375 17.7292L19.2708 11.5625Z"
                      fill="black"
                    />
                  </svg>
                </button>

                <div>
                  <p className="text-base_next text-white font-bold">
                    New to GlobalAid?{" "}
                    <Link className="transition-all duration-200 hover:text-primary">
                      Register
                    </Link>
                  </p>
                </div>
              </div>
              <div className="md:max-w-[320px] ml-auto text-center md:text-left">
                <PreviewUser />
                <div className="mt-10">
                  <p className="text-[#C3D1FF] text-[18px] font-bold leading-tight mb-3">
                    Need help accessing dashboard?
                  </p>
                  <Link className="inline-block rounded-10 bg-gradient-two h-[40px] px-3 text-sm text-black font-bold flex items-center justify-between w-[100px]">
                    Get help
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8.10601 10.4798L7.35877 10.2307C5.00556 9.44629 3.82895 9.05409 3.82895 8.33333C3.82895 7.61257 5.00556 7.22037 7.35877 6.43597L12.8719 4.59824C14.5277 4.04631 15.3556 3.77035 15.7926 4.20736C16.2297 4.64438 15.9537 5.47228 15.4018 7.12807L13.564 12.6412C12.7796 14.9944 12.3874 16.1711 11.6667 16.1711C10.9459 16.1711 10.5537 14.9944 9.7693 12.6412L9.52022 11.894L13.2071 8.20711C13.5976 7.81658 13.5976 7.18342 13.2071 6.79289C12.8166 6.40237 12.1834 6.40237 11.7929 6.79289L8.10601 10.4798Z"
                        fill="black"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Login;
