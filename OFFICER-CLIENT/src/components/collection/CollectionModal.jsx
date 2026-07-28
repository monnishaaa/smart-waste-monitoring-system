import { useState } from "react";

function CollectionModal({ house, onClose, onSave }) {
  const [status, setStatus] = useState("");
  const [remarks, setRemarks] = useState("");

  if (!house) return null;

  const handleSubmit = () => {
    if (!status) {
      alert("Please select a waste status.");
      return;
    }

    onSave({
      householdId: house.id,
      status,
      remarks,
    });

    setStatus("");
    setRemarks("");
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center">

      <div className="bg-white rounded-xl shadow-xl w-[500px] p-6">

        <h2 className="text-2xl font-bold text-green-700 mb-6">
          Record Waste Collection
        </h2>

        <div className="mb-3">
          <strong>Household ID:</strong> {house.id}
        </div>

        <div className="mb-5">
          <strong>Head of Family:</strong> {house.head}
        </div>

        <label className="block font-semibold mb-2">
          Waste Status
        </label>

        <select
          className="w-full border rounded-lg p-3 mb-5"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="">Select Status</option>

          <option>Properly Segregated</option>
          <option>Mixed Waste</option>
          <option>Wet Waste Only</option>
          <option>Dry Waste Only</option>
          <option>No Waste Given</option>
          <option>House Locked</option>
        </select>

        <label className="block font-semibold mb-2">
          Remarks
        </label>

        <textarea
          rows="4"
          className="w-full border rounded-lg p-3 mb-6"
          value={remarks}
          onChange={(e) => setRemarks(e.target.value)}
        />

        <div className="flex justify-end gap-3">

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg border"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="bg-green-700 hover:bg-green-800 text-white px-5 py-2 rounded-lg"
          >
            Save Collection
          </button>

        </div>

      </div>

    </div>
  );
}

export default CollectionModal;