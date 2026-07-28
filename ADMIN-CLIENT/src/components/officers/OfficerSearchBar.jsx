function OfficerSearchBar({ search, setSearch, onAdd }) {
  return (
    <div className="bg-white rounded-xl shadow p-6 flex justify-between items-center mb-6">
      <input
        type="text"
        placeholder="Search by Officer ID, Name or Email..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-96 border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
      />

      <button
        onClick={onAdd}
        className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-semibold"
      >
        + Add Officer
      </button>
    </div>
  );
}

export default OfficerSearchBar;