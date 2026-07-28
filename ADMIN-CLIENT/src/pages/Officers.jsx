import { useState } from "react";

import MainLayout from "../layouts/MainLayout";

import officersData from "../data/officers";

import OfficerSearchBar from "../components/officers/OfficerSearchBar";
import OfficerTable from "../components/officers/OfficerTable";
import OfficerModal from "../components/officers/OfficerModal";

function Officers() {

  const [officers, setOfficers] = useState(officersData);

  const [search, setSearch] = useState("");

  const [openModal, setOpenModal] = useState(false);

  const [editingOfficer, setEditingOfficer] = useState(null);

  const filteredOfficers = officers.filter((officer) => {

    const value = search.toLowerCase();

    return (
      officer.id.toLowerCase().includes(value) ||
      officer.name.toLowerCase().includes(value) ||
      officer.email.toLowerCase().includes(value)
    );

  });

  const handleAdd = () => {
    setEditingOfficer(null);
    setOpenModal(true);
  };

  const handleEdit = (officer) => {
    setEditingOfficer(officer);
    setOpenModal(true);
  };

  const handleDelete = (officer) => {

    const confirmDelete = window.confirm(
      `Delete Officer ${officer.name}?`
    );

    if (confirmDelete) {
      setOfficers(
        officers.filter((o) => o.id !== officer.id)
      );
    }

  };

  const handleSave = (officer) => {

    if (editingOfficer) {

      setOfficers(
        officers.map((o) =>
          o.id === officer.id ? officer : o
        )
      );

    } else {

      setOfficers([...officers, officer]);

    }

    setOpenModal(false);

  };

  return (
    <MainLayout>

      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Officer Management
      </h1>

      <OfficerSearchBar
        search={search}
        setSearch={setSearch}
        onAdd={handleAdd}
      />

      <OfficerTable
        officers={filteredOfficers}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <OfficerModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        onSave={handleSave}
        editingOfficer={editingOfficer}
      />

    </MainLayout>
  );
}

export default Officers;