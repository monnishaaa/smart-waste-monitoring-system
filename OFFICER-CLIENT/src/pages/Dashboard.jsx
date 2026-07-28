import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import DashboardHeader from "../components/DashboardHeader";
import SearchBar from "../components/SearchBar";
import StatCard from "../components/StatCard";
import QRScannerModal from "../components/QRScannerModal";

import { getHouseholds } from "../api/householdApi";
import { getDashboardData } from "../api/dashboardApi";

function Dashboard() {
  const navigate = useNavigate();

  const [households, setHouseholds] = useState([]);
  const [dashboard, setDashboard] = useState(null);

  const [selectedWard, setSelectedWard] = useState("All Wards");
  const [search, setSearch] = useState("");
  const [openScanner, setOpenScanner] = useState(false);

  useEffect(() => {
    loadHouseholds();
  }, []);

  useEffect(() => {
    loadDashboard();
  }, [selectedWard]);

  const loadHouseholds = async () => {
    try {
      const res = await getHouseholds();
      setHouseholds(res.data);
    } catch (err) {
      console.error("Error loading households:", err);
    }
  };

  const loadDashboard = async () => {
    try {
      const res = await getDashboardData(selectedWard);
      setDashboard(res.data);
    } catch (err) {
      console.error("Dashboard Error:", err);
    }
  };

  // Search Household
  const handleSearch = () => {
    if (!search.trim()) {
      alert("Please enter Household ID or Head.");
      return;
    }

    const value = search.trim().toLowerCase();

    const house = households.find(
      (h) =>
        h.householdId?.toLowerCase() === value ||
        h.head?.toLowerCase().includes(value)
    );

    if (house) {
      navigate(`/household/${house._id}`);
    } else {
      alert("Household not found.");
    }
  };

  // QR Scan Success
  const handleScanSuccess = (decodedText) => {
    setOpenScanner(false);

    const house = households.find(
      (h) => h.householdId === decodedText
    );

    if (house) {
      navigate(`/household/${house._id}`);
    } else {
      alert("Household not found.");
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

      <DashboardHeader />

      <SearchBar
        search={search}
        setSearch={setSearch}
        selectedWard={selectedWard}
        setSelectedWard={setSelectedWard}
        onSearch={handleSearch}
        onScan={() => setOpenScanner(true)}
      />

      {/* Household Summary */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">

        <StatCard
          title="Total Households"
          value={dashboard.totalHouseholds}
          icon="🏠"
          color="text-blue-600"
        />

        <StatCard
          title="Active Households"
          value={dashboard.activeHouseholds}
          icon="✅"
          color="text-green-600"
        />

        <StatCard
          title="Inactive Households"
          value={dashboard.inactiveHouseholds}
          icon="❌"
          color="text-red-600"
        />

        <StatCard
          title="Officers Assigned"
          value={dashboard.officers}
          icon="👮"
          color="text-purple-600"
        />

      </div>

      {/* Collection Summary */}

      <h2 className="text-2xl font-bold mt-10 mb-5">
        Collection Summary
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

        <StatCard
          title="Properly Segregated"
          value={dashboard.collectionSummary.properlySegregated}
          icon="♻️"
          color="text-green-600"
        />

        <StatCard
          title="Mixed Waste"
          value={dashboard.collectionSummary.mixedWaste}
          icon="🟤"
          color="text-yellow-700"
        />

        <StatCard
          title="Wet Waste Only"
          value={dashboard.collectionSummary.wetWasteOnly}
          icon="💧"
          color="text-blue-600"
        />

        <StatCard
          title="Dry Waste Only"
          value={dashboard.collectionSummary.dryWasteOnly}
          icon="📦"
          color="text-orange-600"
        />

        <StatCard
          title="House Locked"
          value={dashboard.collectionSummary.houseLocked}
          icon="🔒"
          color="text-gray-700"
        />

        <StatCard
          title="No Waste Given"
          value={dashboard.collectionSummary.noWasteGiven}
          icon="🚫"
          color="text-red-500"
        />

      </div>

      <QRScannerModal
        open={openScanner}
        onClose={() => setOpenScanner(false)}
        onScanSuccess={handleScanSuccess}
      />

    </MainLayout>
  );
}

export default Dashboard;