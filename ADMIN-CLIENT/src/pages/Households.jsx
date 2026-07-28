import { useEffect, useState } from "react";

import MainLayout from "../layouts/MainLayout";

import SearchBar from "../components/households/SearchBar";
import HouseholdTable from "../components/households/HouseholdTable";
import HouseholdModal from "../components/households/HouseholdModal";
import QRCodeModal from "../components/households/QRCodeModal";

import {
  getHouseholds,
  addHousehold,
  updateHousehold,
  deleteHousehold,
} from "../api/householdApi";

function Households() {
  const [households, setHouseholds] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedWard, setSelectedWard] = useState("All Wards");

  const [openModal, setOpenModal] = useState(false);
  const [editingHouse, setEditingHouse] = useState(null);
  const [selectedHouse, setSelectedHouse] = useState(null);

  // Load households
  const loadHouseholds = async () => {
    try {
      const res = await getHouseholds();
      setHouseholds(res.data);
    } catch (error) {
      console.error("Error loading households:", error);
    }
  };

  useEffect(() => {
    loadHouseholds();
  }, []);

  // Filter households
  const filteredHouseholds = households.filter((house) => {
    const value = search.toLowerCase();

    const matchesSearch =
      (house.householdId || "").toLowerCase().includes(value) ||
      (house.head || "").toLowerCase().includes(value) ||
      (house.familyCard || "").toLowerCase().includes(value) ||
      (house.phone || "").toLowerCase().includes(value);

    const matchesWard =
      selectedWard === "All Wards" ||
      house.ward === selectedWard;

    return matchesSearch && matchesWard;
  });

  // Add
  const handleAdd = () => {
    setEditingHouse(null);
    setOpenModal(true);
  };

  // Edit
  const handleEdit = (house) => {
    setEditingHouse(house);
    setOpenModal(true);
  };

  // Save
  const handleSave = async (house) => {
    try {
      if (editingHouse) {
        await updateHousehold(editingHouse._id, house);
      } else {
        await addHousehold(house);
      }

      setOpenModal(false);
      setEditingHouse(null);

      await loadHouseholds();

      alert("Household saved successfully!");
    } catch (error) {
      console.error("Save Error:", error);

      if (error.response) {
        console.log(error.response.data);
        alert(error.response.data.message);
      } else {
        alert(error.message);
      }
    }
  };

  // Delete
  const handleDelete = async (house) => {
    const confirmDelete = window.confirm(
      `Delete Household ${house.householdId}?`
    );

    if (!confirmDelete) return;

    try {
      await deleteHousehold(house._id);

      await loadHouseholds();

      alert("Household deleted successfully!");
    } catch (error) {
      console.error("Delete Error:", error);

      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert(error.message);
      }
    }
  };

  // QR
  const handleViewQR = (house) => {
    setSelectedHouse(house);
  };

  return (
    <MainLayout>
      <h2 className="text-3xl font-bold text-gray-800 mb-6">
        Household Management
      </h2>

      <SearchBar
        search={search}
        setSearch={setSearch}
        selectedWard={selectedWard}
        setSelectedWard={setSelectedWard}
        onAdd={handleAdd}
      />

      <HouseholdTable
        households={filteredHouseholds}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onViewQR={handleViewQR}
      />

      <HouseholdModal
        open={openModal}
        onClose={() => {
          setOpenModal(false);
          setEditingHouse(null);
        }}
        onSave={handleSave}
        editingHouse={editingHouse}
      />

      <QRCodeModal
        house={selectedHouse}
        onClose={() => setSelectedHouse(null)}
      />
    </MainLayout>
  );
}

export default Households;