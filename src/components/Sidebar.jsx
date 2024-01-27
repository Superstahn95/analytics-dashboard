import React from "react";
import Logo from "/svg/Vector.svg";
import { svgs } from "../data/svg";
import ThemeToggle from "./ThemeToggle";
import Controls from "./Controls";
import useMobileDetect from "../hooks/useMobileDetect";
import { useEffect, useState } from "react";

function Sidebar({ isOpen, toggleSidebar, setIsSidebarOpen }) {
  const [selectedLink, setSelectedLink] = useState(1);
  const isMobile = useMobileDetect();
  useEffect(() => {
    if (!isMobile) {
      setIsSidebarOpen(true);
    }
  }, [isMobile]);
  return (
    <div
      className={` shadow-md  bg-white transition-transform transform duration-1000  fixed w-[80px] z-[199] top-0 left-0 h-full dark:bg-slate-800 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="py-[20px] flex flex-col items-center justify-between bg-[#F7F8FA]  dark:bg-slate-900 h-[90vh]">
        {/* logo div */}
        <div className="flex flex-col space-y-5 items-center justify-center w-full">
          <img src={Logo} alt="" />
          <ul className="flex flex-col items-center justify-center space-y-5 w-full ">
            {svgs.map((svg) => (
              <li
                onClick={() => setSelectedLink(svg.id)}
                className={`${
                  svg.id === selectedLink &&
                  "border-r-2 border-[#0D062D] dark:border-white"
                } flex cursor-pointer items-center justify-center w-full`}
                key={svg.id}
              >
                <img src={svg.url} alt="" />
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>
        <Controls />
      </div>
    </div>
  );
}

export default Sidebar;
