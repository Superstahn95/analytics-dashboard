import Sidebar from "../components/Sidebar";
import TopBar from "../components/TopBar";

function DashboardHome() {
  return (
    <div className="flex min-h-screen bg-[#F7F8FA] ">
      <Sidebar />
      <main className="flex-1 ">
        <TopBar />
      </main>
    </div>
  );
}

export default DashboardHome;
