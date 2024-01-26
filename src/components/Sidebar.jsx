import React from "react";
import Logo from "/svg/Vector.svg";
import { svgs } from "../data/svg";
import ThemeToggle from "./ThemeToggle";
import Controls from "./Controls";
import useMobileDetect from "../hooks/useMobileDetect";
import { useEffect } from "react";

function Sidebar({ isOpen, toggleSidebar, setIsSidebarOpen }) {
  const isMobile = useMobileDetect();
  useEffect(() => {
    if (!isMobile) {
      setIsSidebarOpen(true);
    }
  }, [isMobile]);
  return (
    // <div className="bg-white shadow-md dark:bg-slate-800">
    //   <div className="p-[20px] flex flex-col items-center justify-between bg-[#F7F8FA] dark:bg-slate-900 h-[90vh]">
    //     {/* logo div */}
    //     <div className="flex flex-col space-y-5 items-center justify-center">
    //       <img src={Logo} alt="" />
    //       <ul className="flex flex-col items-center justify-center space-y-5">
    //         {svgs.map((svg) => (
    //           <li key={svg.id}>
    //             <img src={svg.url} alt="" />
    //           </li>
    //         ))}
    //       </ul>
    //       <ThemeToggle />
    //     </div>
    //     <Controls />
    //   </div>
    // </div>
    // second Sidebar set up
    // <div className=" shadow-md  bg-white  fixed w-[80px] z-[99] top-0 left-0 h-full dark:bg-slate-800 ">
    //   <div className="p-[20px] flex flex-col items-center justify-between bg-[#F7F8FA] dark:bg-slate-900 h-[90vh]">
    //     {/* logo div */}
    //     <div className="flex flex-col space-y-5 items-center justify-center">
    //       <img src={Logo} alt="" />
    //       <ul className="flex flex-col items-center justify-center space-y-5">
    //         {svgs.map((svg) => (
    //           <li key={svg.id}>
    //             <img src={svg.url} alt="" />
    //           </li>
    //         ))}
    //       </ul>
    //       <ThemeToggle />
    //     </div>
    //     <Controls />
    //   </div>
    // </div>

    <div
      className={` shadow-md  bg-white transition-transform transform duration-1000  fixed w-[80px] z-[99] top-0 left-0 h-full dark:bg-slate-800 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="p-[20px] flex flex-col items-center justify-between bg-[#F7F8FA] dark:bg-slate-900 h-[90vh]">
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
