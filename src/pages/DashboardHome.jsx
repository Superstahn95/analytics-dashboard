import Sidebar from "../components/Sidebar";
import TopBar from "../components/TopBar";
import Statistics from "../components/Statistics";
import { useState } from "react";
import useMobileDetect from "../hooks/useMobileDetect";

function DashboardHome() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const isMobile = useMobileDetect();
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    // <div className="flex min-h-screen bg-[#F7F8FA] dark:bg-slate-900">
    //   <Sidebar />
    //   <main className="flex-1 ">
    //     <TopBar />
    //     <Statistics />
    //   </main>
    // </div>
    <div className=" min-h-screen bg-[#F7F8FA] dark:bg-slate-900">
      <Sidebar isOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <main className={`${!isMobile && "ml-[80px] "}`}>
        <TopBar
          isOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
          toggleSidebar={toggleSidebar}
        />
        <Statistics />
      </main>
    </div>
  );
}

export default DashboardHome;
