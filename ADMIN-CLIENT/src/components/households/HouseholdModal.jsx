import { useEffect, useState } from "react";

function HouseholdModal({ open, onClose, onSave, editingHouse }) {
  const [form, setForm] = useState({
    householdId: "",
    head: "",
    familyCard: "",
    phone: "",
    ward: "Ward 1",
    address: "",
    rewardPoints: 0,
    penaltyPoints: 0,
    qrCode: "",
  });

  useEffect(() => {
    if (editingHouse) {
      setForm({
        householdId: editingHouse.householdId || "",
        head: editingHouse.head || "",
        familyCard: editingHouse.familyCard || "",
        phone: editingHouse.phone || "",
        ward: editingHouse.ward || "Ward 1",
        address: editingHouse.address || "",
        rewardPoints: editingHouse.rewardPoints || 0,
        penaltyPoints: editingHouse.penaltyPoints || 0,
        qrCode:
          editingHouse.qrCode || editingHouse.householdId || "",
      });
    } else {
      setForm({
        householdId: "",
        head: "",
        familyCard: "",
        phone: "",
        ward: "Ward 1",
        address: "",
        rewardPoints: 0,
        penaltyPoints: 0,
        qrCode: "",
      });
    }
  }, [editingHouse]);

  if (!open) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (
      !form.householdId ||
      !form.head ||
      !form.familyCard ||
      !form.phone
    ) {
      alert("Please fill all required fields.");
      return;
    }

    onSave({
      ...form,
      qrCode: form.householdId,
    });
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center">
      <div className="bg-white rounded-xl w-[650px] p-8 shadow-xl">

        <h2 className="text-2xl font-bold text-teal-700 mb-6">
          {editingHouse ? "Edit Household" : "Add Household"}
        </h2>

        <div className="grid grid-cols-2 gap-4">

          <input
            name="householdId"
            value={form.householdId}
            onChange={handleChange}
            placeholder="Household ID"
            className="border rounded-lg p-3"
            disabled={editingHouse}
          />

          <input
            name="head"
            value={form.head}
            onChange={handleChange}
            placeholder="Head of Family"
            className="border rounded-lg p-3"
          />

          <input
            name="familyCard"
            value={form.familyCard}
            onChange={handleChange}
            placeholder="Family Card Number"
            className="border rounded-lg p-3"
          />

          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="border rounded-lg p-3"
          />

          <select
            name="ward"
            value={form.ward}
            onChange={handleChange}
            className="border rounded-lg p-3"
          >
            <option>Ward 1</option>
            <option>Ward 2</option>
            <option>Ward 3</option>
            <option>Ward 4</option>
          </select>

          <input
            name="address"
            value={form.address}
            onChange={handleChange}
            placeholder="Address"
            className="border rounded-lg p-3"
          />

        </div>

        <div className="flex justify-end gap-3 mt-8">

          <button
            onClick={onClose}
            className="border px-5 py-2 rounded-lg"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="bg-teal-600 hover:bg-teal-700 text-white px-5 py-2 rounded-lg"
          >
            Save Household
          </button>

        </div>

      </div>
    </div>
  );
}

export default HouseholdModal;