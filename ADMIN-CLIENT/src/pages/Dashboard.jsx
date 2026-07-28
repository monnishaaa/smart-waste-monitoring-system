import { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import DashboardCard from "../components/dashboard/DashboardCard";
import CollectionCard from "../components/dashboard/CollectionCard";
import { getDashboardData } from "../api/dashboardApi";

function Dashboard() {
  const [selectedWard, setSelectedWard] = useState("All Wards");
  const [dashboard, setDashboard] = useState(null);

  useEffect(() => {
    loadDashboard();
  }, [selectedWard]);

  const loadDashboard = async () => {
    try {
      const res = await getDashboardData(selectedWard);
      setDashboard(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  if (!dashboard) {
    return (
      <MainLayout>
        <div className="flex justify-center items-center h-[70vh]">
          <h2 className="text-2xl font-semibold">
            Loading Dashboard...
          </h2>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>

      <h1 className="text-3xl font-bold text-center mb-8">
        Admin Dashboard
      </h1>

      {/* Ward Filter */}

      <div className="flex justify-center mb-10">

        <div className="flex items-center gap-4">

          <label className="font-semibold text-lg">
            Select Ward
          </label>

          <select
            value={selectedWard}
            onChange={(e) =>
              setSelectedWard(e.target.value)
            }
            className="border rounded-lg px-4 py-2 shadow"
          >
            <option>All Wards</option>
            <option>Ward 1</option>
            <option>Ward 2</option>
            <option>Ward 3</option>
            <option>Ward 4</option>
          </select>

        </div>

      </div>

      {/* Household Summary */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">

        <DashboardCard
          title="Total Households"
          value={dashboard.totalHouseholds}
          color="text-teal-700"
        />

        <DashboardCard
          title="Active Households"
          value={dashboard.activeHouseholds}
          color="text-green-600"
        />

        <DashboardCard
          title="Inactive Households"
          value={dashboard.inactiveHouseholds}
          color="text-red-600"
        />

        <DashboardCard
          title="Officers Assigned"
          value={dashboard.officers}
          color="text-indigo-600"
        />

      </div>

      {/* Collection Summary */}

      <h2 className="text-2xl font-bold mb-6">
        Collection Summary
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        <CollectionCard
          title="Properly Segregated"
          value={dashboard.collectionSummary.properlySegregated}
          color="text-green-600"
        />

        <CollectionCard
          title="Mixed Waste"
          value={dashboard.collectionSummary.mixedWaste}
          color="text-yellow-600"
        />

        <CollectionCard
          title="Wet Waste Only"
          value={dashboard.collectionSummary.wetWasteOnly}
          color="text-blue-600"
        />

        <CollectionCard
          title="Dry Waste Only"
          value={dashboard.collectionSummary.dryWasteOnly}
          color="text-orange-600"
        />

        <CollectionCard
          title="House Locked"
          value={dashboard.collectionSummary.houseLocked}
          color="text-gray-600"
        />

        <CollectionCard
          title="No Waste Given"
          value={dashboard.collectionSummary.noWasteGiven}
          color="text-red-600"
        />

      </div>

    </MainLayout>
  );
}

export default Dashboard;