import { useState, useContext } from "react";
import MainLayout from "../layouts/MainLayout";
import WardSelector from "../components/collection/WardSelector";
import CollectionTable from "../components/collection/CollectionTable";
import CollectionModal from "../components/collection/CollectionModal";
import QRScanner from "../components/collection/QRScanner";

import { WasteContext } from "../context/WasteContext";

function Collection() {
  const { households, addCollection } = useContext(WasteContext);

  const [selectedWard, setSelectedWard] = useState("");
  const [filteredHouseholds, setFilteredHouseholds] = useState([]);
  const [selectedHouse, setSelectedHouse] = useState(null);
  const [showScanner, setShowScanner] = useState(false);

  // Load households
  const handleLoad = () => {
    if (!selectedWard) {
      alert("Please select a ward.");
      return;
    }

    const data = households
      .filter((house) => house.ward === selectedWard)
      .map((house) => ({
        ...house,
        todayStatus: "Pending",
      }));

    setFilteredHouseholds(data);
  };

  // Open modal manually
  const handleRecord = (house) => {
    setSelectedHouse(house);
  };

  // Save collection
  const handleSave = (collectionData) => {
    const today = new Date();

    const record = {
      id: Date.now(),
      householdId: collectionData.householdId,
      date: today.toLocaleDateString("en-GB"),
      day: today.toLocaleDateString("en-US", {
        weekday: "long",
      }),
      status: collectionData.status,
      remarks: collectionData.remarks,
      officer: "Municipal Officer",
    };

    addCollection(record);

    const updated = filteredHouseholds.map((house) =>
      house.id === collectionData.householdId
        ? {
            ...house,
            todayStatus: "Completed",
          }
        : house
    );

    setFilteredHouseholds(updated);
    setSelectedHouse(null);
  };

  // QR Scan Result
  const handleScan = (householdId) => {
    const house = households.find((h) => h.id === householdId);

    if (house) {
      setSelectedHouse(house);
      setShowScanner(false);
    } else {
      alert("Household not found.");
    }
  };

  return (
    <MainLayout>
      <WardSelector
        selectedWard={selectedWard}
        setSelectedWard={setSelectedWard}
        onLoad={handleLoad}
      />

      {/* Scan Button */}
      <div className="my-6 flex justify-center">
        <button
          onClick={() => setShowScanner(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
        >
          📷 Scan QR Code
        </button>
      </div>

      {filteredHouseholds.length > 0 && (
        <CollectionTable
          households={filteredHouseholds}
          onRecord={handleRecord}
        />
      )}

      <CollectionModal
        house={selectedHouse}
        onClose={() => setSelectedHouse(null)}
        onSave={handleSave}
      />

      {showScanner && (
        <QRScanner
          onScan={handleScan}
          onClose={() => setShowScanner(false)}
        />
      )}
    </MainLayout>
  );
}

export default Collection;