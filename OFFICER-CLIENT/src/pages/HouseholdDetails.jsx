// HouseholdDetails.jsx
// NOTE: Replace this file with the latest version from your project if needed.
// This template includes the collection history table styling discussed.

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { getHouseholdById } from "../api/householdApi";
import { addCollection, getCollections } from "../api/collectionApi";

export default function HouseholdDetails() {
  const { id } = useParams();
  const [household, setHousehold] = useState(null);
  const [collections, setCollections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [collectionDate, setCollectionDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [wasteCollection, setWasteCollection] = useState("Properly Segregated");
  const [remarks, setRemarks] = useState("");

  useEffect(() => { loadHousehold(); }, [id]);
  useEffect(() => { if (household) loadCollections(); }, [household]);

  async function loadHousehold() {
    try {
      const res = await getHouseholdById(id);
      setHousehold(res.data);
    } finally { setLoading(false); }
  }

  async function loadCollections() {
    const res = await getCollections(household.householdId);
    setCollections(res.data);
  }

  async function handleSaveCollection() {
    setSaving(true);
    try {
      await addCollection({
        householdId: household.householdId,
        collectionDate,
        wasteCollection,
        remarks,
        officer: "Officer",
      });
      setRemarks("");
      await loadHousehold();
      await loadCollections();
      alert("Collection saved successfully!");
    } catch {
      alert("Failed to save collection.");
    } finally {
      setSaving(false);
    }
  }

  if (loading) return <MainLayout><div className="p-8">Loading...</div></MainLayout>;
  if (!household) return <MainLayout><div className="p-8">Household Not Found</div></MainLayout>;

  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-bold text-green-700 mb-6">Household Information</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <p><strong>Household ID:</strong> {household.householdId}</p>
            <p><strong>Head:</strong> {household.head}</p>
            <p><strong>Family Card:</strong> {household.familyCard}</p>
            <p><strong>Phone:</strong> {household.phone}</p>
            <p><strong>Ward:</strong> {household.ward}</p>
            <p><strong>Address:</strong> {household.address}</p>
            <p className="font-bold text-green-700">⭐ Reward Points: {household.rewardPoints}</p>
            <p className="font-bold text-red-600">⚠ Penalty Points: {household.penaltyPoints}</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-bold text-green-700 mb-6">Record Waste Collection</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <input type="date" className="border rounded-lg p-3" value={collectionDate} onChange={e=>setCollectionDate(e.target.value)} />
            <select className="border rounded-lg p-3" value={wasteCollection} onChange={e=>setWasteCollection(e.target.value)}>
              <option>Properly Segregated</option>
              <option>Mixed Waste</option>
              <option>Wet Waste Only</option>
              <option>Dry Waste Only</option>
              <option>House Locked</option>
              <option>No Waste Given</option>
            </select>
          </div>
          <textarea className="border rounded-lg p-3 w-full mt-4" rows="4" value={remarks} onChange={e=>setRemarks(e.target.value)} />
          <button onClick={handleSaveCollection} disabled={saving} className="mt-4 bg-green-700 text-white px-6 py-3 rounded-lg">
            {saving ? "Saving..." : "Save Collection"}
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-bold text-green-700 mb-6">Collection History</h2>
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300">
              <thead>
                <tr className="bg-green-700 text-white">
                  <th className="border border-gray-300 p-3">Date</th>
                  <th className="border border-gray-300 p-3">Waste Collection</th>
                  <th className="border border-gray-300 p-3">Reward</th>
                  <th className="border border-gray-300 p-3">Penalty</th>
                  <th className="border border-gray-300 p-3">Officer</th>
                  <th className="border border-gray-300 p-3">Remarks</th>
                </tr>
              </thead>
              <tbody>
                {collections.length===0 ? (
                  <tr><td colSpan="6" className="border border-gray-300 p-6 text-center">No collection records found.</td></tr>
                ) : collections.map(record=>(
                  <tr key={record._id} className="text-center hover:bg-gray-50">
                    <td className="border border-gray-300 p-3">{new Date(record.collectionDate).toLocaleDateString()}</td>
                    <td className="border border-gray-300 p-3">{record.wasteCollection}</td>
                    <td className="border border-gray-300 p-3"><span className="text-green-600 font-bold">{record.rewardPoints}</span></td>
                    <td className="border border-gray-300 p-3"><span className="text-red-600 font-bold">{record.penaltyPoints}</span></td>
                    <td className="border border-gray-300 p-3">{record.officer}</td>
                    <td className="border border-gray-300 p-3">{record.remarks}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </MainLayout>
  );
  
}
