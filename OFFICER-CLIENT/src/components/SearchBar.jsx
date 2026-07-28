function SearchBar({
  search,
  setSearch,
  selectedWard,
  setSelectedWard,
  onScan,
  onSearch,
}) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 mt-6">
      <div className="flex flex-col md:flex-row gap-4">

        {/* Ward */}
        <select
          value={selectedWard}
          onChange={(e) => setSelectedWard(e.target.value)}
          className="border rounded-lg px-4 py-3 md:w-52"
        >
          <option>All Wards</option>
          <option>Ward 1</option>
          <option>Ward 2</option>
          <option>Ward 3</option>
          <option>Ward 4</option>
        </select>

        {/* Search */}
        <input
          type="text"
          placeholder="Search Household ID or Head..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onSearch();
            }
          }}
          className="flex-1 border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        {/* Search Button */}
        <button
          onClick={onSearch}
          className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-lg"
        >
          🔍 Search
        </button>

        {/* QR Scan Button */}
        <button
          onClick={onScan}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
        >
          📷 Scan QR
        </button>

      </div>
    </div>
  );
}

export default SearchBar;