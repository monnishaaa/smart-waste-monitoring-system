function WardSelector({
  selectedWard,
  setSelectedWard,
  onLoad,
}) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-6">

      <h2 className="text-2xl font-bold text-green-700 mb-6">
        Waste Collection
      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        {/* Collection Date */}

        <div>
          <label className="block font-semibold mb-2">
            Collection Date
          </label>

          <input
            type="date"
            className="w-full border rounded-lg p-3"
          />
        </div>

        {/* Ward */}

        <div>
          <label className="block font-semibold mb-2">
            Select Ward
          </label>

          <select
            className="w-full border rounded-lg p-3"
            value={selectedWard}
            onChange={(e) =>
              setSelectedWard(e.target.value)
            }
          >
            <option value="">Choose Ward</option>

            <option>Ward 1</option>

            <option>Ward 2</option>

            <option>Ward 3</option>

            <option>Ward 4</option>

            <option>Ward 5</option>

          </select>
        </div>

        {/* Button */}

        <div className="flex items-end">

          <button
            onClick={onLoad}
            className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 w-full"
          >
            Load Households
          </button>

        </div>

      </div>

    </div>
  );
}

export default WardSelector;