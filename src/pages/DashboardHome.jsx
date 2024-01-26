import Sidebar from "../components/Sidebar";
import TopBar from "../components/TopBar";
import Statistics from "../components/Statistics";

function DashboardHome() {
  return (
    <div className="flex min-h-screen bg-[#F7F8FA] dark:bg-slate-900">
      <Sidebar />
      <main className="flex-1 ">
        <TopBar />
        <Statistics />
      </main>
    </div>
  );
}

export default DashboardHome;
