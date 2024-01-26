import React from "react";
import Calender from "/svg/Group.svg";
import Search from "/svg/search.svg";
import Bell from "/svg/solar_bell-outline.svg";
import MiniProfile from "./MiniProfile";

function TopBar() {
  return (
    <div className="flex  flex-1 h-[88px] shadow-sm items-center justify-between font-jakarta p-[18px] dark:text-white">
      <h2>Dashboard</h2>
      <div className="flex items-center space-x-8 ">
        {/* input div */}
        <div className="hidden md:block relative border border-[#DADDDD] rounded-[20px] w-[340px] bg-white">
          <input
            type="text"
            className="border-none outline-none p-2 text-[14px] font-inter rounded-[20px] ml-5"
            placeholder="Search..."
          />
          <div className="absolute top-[50%] -translate-y-1/2 left-2 ">
            <img src={Search} alt="" />
          </div>
        </div>

        {/* date div */}
        <div className=" items-center space-x-2 hidden md:flex">
          <img src={Calender} alt="" />
          <span className="font-inter text-[14px]">November 15, 2023</span>
        </div>
        <div className="w-[40px] h-[40px] flex items-center justify-center rounded-full border border-[#DADDDD] dark:bg-white">
          <img src={Bell} alt="" />
        </div>
        <MiniProfile />
      </div>
    </div>
  );
}

export default TopBar;
