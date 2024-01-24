import React from "react";
import Logo from "/svg/Vector.svg";
import { svgs } from "../data/svg";
import ThemeToggle from "./ThemeToggle";
import Controls from "./Controls";

function Sidebar() {
  return (
    <div className="bg-white shadow-md">
      <div className="p-[20px] flex flex-col items-center justify-between bg-[#F7F8FA] h-[90vh]">
        {/* logo div */}
        <div className="flex flex-col space-y-5 items-center justify-center">
          <img src={Logo} alt="" />
          <ul className="flex flex-col items-center justify-center space-y-5">
            {svgs.map((svg) => (
              <li key={svg.id}>
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
