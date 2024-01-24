import React from "react";
import Moon from "/svg/moon.svg";
import Sun from "/svg/sun.svg";

function ThemeToggle() {
  return (
    <div className="bg-white flex flex-col items-center space-y-5 justify-center p-1 rounded-t-full rounded-b-full">
      <div className="w-[30px] h-[30px] bg-[#34CAA5] rounded-full flex items-center justify-center cursor-pointer">
        <img src={Sun} alt="" />
      </div>
      <div className="w-[30px] h-[30px] rounded-full flex items-center justify-center cursor-pointer">
        <img src={Moon} alt="" />
      </div>
    </div>
  );
}

export default ThemeToggle;
