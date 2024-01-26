import React from "react";
import Moon from "/svg/moon.svg";
import Sun from "/svg/sun.svg";
import useTheme from "../hooks/useTheme";

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="bg-white flex flex-col items-center space-y-5 justify-center p-1 rounded-t-full rounded-b-full dark:bg-slate-800">
      <button
        onClick={() => setTheme("light")}
        className={`${
          theme === "light" && "bg-[#34CAA5]"
        } w-[30px] h-[30px]  rounded-full flex items-center justify-center cursor-pointer`}
      >
        <img src={Sun} alt="" />
      </button>
      <button
        onClick={() => setTheme("dark")}
        className={`${
          theme === "dark" && "bg-[#34CAA5]"
        } w-[30px] h-[30px] rounded-full flex items-center justify-center cursor-pointer`}
      >
        <img src={Moon} alt="" />
      </button>
    </div>
  );
}

export default ThemeToggle;
