import React from "react";
import CtaCarousel from "../components/dashboard/CtaCarousel";
import { TitlePrimary } from "../components/Utility";
import Statistics from "../components/dashboard/Statistics";
import StatisticsTwo from "../components/dashboard/StatisticsTwo";
import PurchasePack from "../components/dashboard/PurchasePack";
import Refer from "../components/dashboard/Refer";
import Pack from "../components/dashboard/Pack";
import PackTwo from "../components/dashboard/PackTwo";
import lightningDuoton from "../assets/lightning_duotone.png";
import iconPlay from "../assets/play-fill.png";

const Dashboard = () => {
  return (
    <div className="space-y-12">
      <div className="">
        <CtaCarousel />
      </div>
      <div className="bg-[rgba(40,46,58,0.60)] shadow-two rounded-10 p-4 md:p-6 space-y-10">
        <div>
          <div className="mb-6 flex justify-between flex-col-reverse sm:flex-row">
            <TitlePrimary>Dashboard</TitlePrimary>
            <div className="relative bg-[#C52A2A] rounded-[5px] pl-6 pr-3 py-1 ml-auto sm:ml-0 mb-4 sm:mb-0">
              <p className="text-base font-bold text-white">
                12,432 Users Joined after you!
              </p>
              <img
                className="absolute -left-[28px] top-1/2 -translate-y-1/2 w-14 h-14"
                src={lightningDuoton}
                alt="lightningDuoton"
              />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 2xl:gap-6 mb-6">
            <Statistics
              total="98,123"
              text="Total Packs %break%
            Purchased Globally"
              styles={``}
            />
            <Statistics
              type={true}
              total="234,442"
              text="Total Registered %break%
              Users so far"
              styles={`bg-[#3F3578] hover:bg-gradient-two`}
            />
            <Statistics
              type={true}
              total="$124,122"
              text="Total Claimed by %break%
              Users so far"
              styles={`bg-[#3F3578] hover:bg-gradient-two`}
            />
            <Statistics
              type={true}
              total="$12,167,674"
              text="Total Value Locked %break%
              In Contract"
              styles={`bg-[#3F3578] hover:bg-gradient-two`}
            />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-0 lg:flex lg:justify-between lg:space-x-6 bg-gradient-four shadow-three rounded-10 p-4 md:p-6 mb-6">
            <StatisticsTwo
              total="98,123"
              text="My Purchased %break%
              Packs"
            />
            <StatisticsTwo
              total="3"
              text="Activated %break%
              Packs"
            />
            <StatisticsTwo
              total="13"
              text="Activated %break%
              Levels"
            />
            <StatisticsTwo
              total="$121"
              text="Missed %break%
              Earnings"
            />
            <StatisticsTwo
              total="$1,123"
              text="Estimated %break%
              daily earnings"
            />
            <StatisticsTwo
              total="$113,123"
              text="Total Claimed %break%
              till date"
            />
          </div>
          <div className="lg:grid grid-cols-[350px_auto] gap-5 space-y-6 lg:space-y-6">
            <PurchasePack />
            <Refer />
          </div>
          <div className="flex items-center mt-5 lg:ml-9">
            <div className="mr-3">
              <img
                src={iconPlay}
                alt="play"
                className="w-14 h-14 cursor-pointer"
              />
            </div>
            <div>
              <p className="text-white font-normal text-[15px]">
                Want to know how it works?
              </p>
              <strong className="text-primary font-bold text-[27px] leading-tight">
                Watch Complan
              </strong>
            </div>
          </div>
        </div>
        <div>
          <div className="mb-6">
            <TitlePrimary>My Packs</TitlePrimary>
          </div>
          <div className="space-y-4">
            <Pack />
            <Pack />
            <PackTwo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
