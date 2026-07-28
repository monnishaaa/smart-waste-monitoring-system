function SearchBar({
  search,
  setSearch,
  selectedWard,
  setSelectedWard,
  onAdd,
}) {
  return (
    <div className="flex justify-between items-center mb-6">

      <div className="flex gap-4">

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
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded-lg px-4 py-3 w-80"
        />

      </div>

      <button
        onClick={onAdd}
        className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg"
      >
        + Add Household
      </button>

    </div>
  );
}

export default SearchBar;