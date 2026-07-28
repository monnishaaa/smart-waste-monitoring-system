import { useEffect, useState } from "react";

function OfficerModal({ open, onClose, onSave, editingOfficer }) {
  const [form, setForm] = useState({
    id: "",
    name: "",
    ward: "Ward 1",
    phone: "",
    email: "",
    status: "Active",
  });

  useEffect(() => {
    if (editingOfficer) {
      setForm(editingOfficer);
    } else {
      setForm({
        id: "",
        name: "",
        ward: "Ward 1",
        phone: "",
        email: "",
        status: "Active",
      });
    }
  }, [editingOfficer]);

  if (!open) return null;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (
      !form.id ||
      !form.name ||
      !form.phone ||
      !form.email
    ) {
      alert("Please fill all required fields.");
      return;
    }

    onSave(form);
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">

      <div className="bg-white rounded-xl shadow-xl w-[650px] p-8">

        <h2 className="text-2xl font-bold text-teal-700 mb-6">
          {editingOfficer ? "Edit Officer" : "Add Officer"}
        </h2>

        <div className="grid grid-cols-2 gap-4">

          <input
            name="id"
            placeholder="Officer ID"
            value={form.id}
            onChange={handleChange}
            className="border rounded-lg p-3"
          />

          <input
            name="name"
            placeholder="Officer Name"
            value={form.name}
            onChange={handleChange}
            className="border rounded-lg p-3"
          />

          <input
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            className="border rounded-lg p-3"
          />

          <input
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
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

          <select
            name="status"
            value={form.status}
            onChange={handleChange}
            className="border rounded-lg p-3"
          >
            <option>Active</option>
            <option>Inactive</option>
          </select>

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
            Save Officer
          </button>

        </div>

      </div>

    </div>
  );
}

export default OfficerModal;