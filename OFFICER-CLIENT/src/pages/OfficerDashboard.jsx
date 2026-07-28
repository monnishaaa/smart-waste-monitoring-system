import Sidebar from "../components/Sidebar";
import DashboardHeader from "../components/DashboardHeader";
import SearchBar from "../components/SearchBar";
import StatCard from "../components/StatCard";

function OfficerDashboard() {
  return (
    <div className="flex bg-gray-100 min-h-screen">

      <Sidebar />

      <main className="flex-1 p-8">

        <DashboardHeader />

        <SearchBar />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">

          <StatCard
            title="Collected"
            value="120"
            color="text-green-600"
          />

          <StatCard
            title="Not Collected"
            value="18"
            color="text-red-600"
          />

          <StatCard
            title="Pending"
            value="32"
            color="text-yellow-500"
          />

        </div>

      </main>

    </div>
  );
}

export default OfficerDashboard;