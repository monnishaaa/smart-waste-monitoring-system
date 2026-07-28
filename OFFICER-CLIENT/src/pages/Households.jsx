import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { getHouseholds } from "../api/householdApi";
import QRScannerModal from "../components/QRScannerModal";

function Households() {
  const navigate = useNavigate();

  const [households, setHouseholds] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedWard, setSelectedWard] = useState("All Wards");
  const [openScanner, setOpenScanner] = useState(false);

  useEffect(() => {
    loadHouseholds();
  }, []);

  const loadHouseholds = async () => {
    try {
      const res = await getHouseholds();
      setHouseholds(res.data);
    } catch (error) {
      console.error("Failed to load households:", error);
    }
  };

  const filteredHouseholds = households.filter((house) => {
    const matchesSearch =
      (house.householdId || "")
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      (house.head || "")
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesWard =
      selectedWard === "All Wards" ||
      house.ward === selectedWard;

    return matchesSearch && matchesWard;
  });

  const handleScanSuccess = (decodedText) => {
    console.log("Scanned:", decodedText);

    const house = households.find(
      (h) =>
        h.householdId.trim().toLowerCase() ===
        decodedText.trim().toLowerCase()
    );

    setOpenScanner(false);

    if (!house) {
      alert("Household not found.");
      return;
    }

    setTimeout(() => {
      navigate(`/household/${house._id}`);
    }, 300);
  };

  return (
    <MainLayout>
      <h1 className="text-3xl font-bold mb-6">
        🏠 Household Management
      </h1>

      {/* Search + Ward + QR */}

      <div className="bg-white rounded-xl shadow p-6 mb-6 flex gap-4 items-center">

        <select
          value={selectedWard}
          onChange={(e) => setSelectedWard(e.target.value)}
          className="border rounded-lg px-4 py-3"
        >
          <option>All Wards</option>
          <option>Ward 1</option>
          <option>Ward 2</option>
          <option>Ward 3</option>
          <option>Ward 4</option>
        </select>

        <input
          type="text"
          placeholder="Search Household..."
          className="flex-1 border rounded-lg px-4 py-3"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button
          onClick={() => setOpenScanner(true)}
          className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-lg font-semibold"
        >
          📷 Scan QR
        </button>

      </div>

      {/* Household Table */}

      <div className="bg-white rounded-xl shadow overflow-hidden">

        <table className="w-full">

          <thead className="bg-green-700 text-white">

            <tr>
              <th className="p-4">Household ID</th>
              <th>Head of Family</th>
              <th>Ward</th>
              <th>Reward</th>
              <th>Penalty</th>
              <th>Action</th>
            </tr>

          </thead>

          <tbody>

            {filteredHouseholds.length > 0 ? (

              filteredHouseholds.map((house) => (

                <tr
                  key={house._id}
                  className="border-b text-center hover:bg-gray-50"
                >

                  <td className="p-4">
                    {house.householdId}
                  </td>

                  <td>{house.head}</td>

                  <td>{house.ward}</td>

                  <td>{house.rewardPoints}</td>

                  <td>{house.penaltyPoints}</td>

                  <td>

                    <Link
                      to={`/household/${house._id}`}
                      className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-lg"
                    >
                      View
                    </Link>

                  </td>

                </tr>

              ))

            ) : (

              <tr>

                <td
                  colSpan="6"
                  className="py-8 text-center text-gray-500"
                >
                  No households found.
                </td>

              </tr>

            )}

          </tbody>

        </table>

      </div>

      <QRScannerModal
        open={openScanner}
        onClose={() => setOpenScanner(false)}
        onScanSuccess={handleScanSuccess}
      />

    </MainLayout>
  );
}

export default Households;