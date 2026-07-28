function HouseholdTable({
  households,
  onEdit,
  onDelete,
  onViewQR,
}) {
  return (
    <div className="bg-white rounded-xl shadow overflow-hidden">
      <table className="w-full">
        <thead className="bg-teal-700 text-white">
          <tr>
            <th className="p-4">Household ID</th>
            <th className="p-4">Head of Family</th>
            <th className="p-4">Ward</th>
            <th className="p-4">Phone</th>
            <th className="p-4">Status</th>
            <th className="p-4">QR</th>
            <th className="p-4">Actions</th>
          </tr>
        </thead>

        <tbody>
          {households.map((house) => (
            <tr
              key={house.id}
              className="border-b hover:bg-gray-50"
            >
              <td className="p-4">{house.householdId}</td>

              <td className="p-4">{house.head}</td>

              <td className="p-4">{house.ward}</td>

              <td className="p-4">{house.phone}</td>

              <td className="p-4">
                <span
                  className={`px-3 py-1 rounded-full text-white text-sm ${
                    house.status === "Active"
                      ? "bg-green-600"
                      : "bg-red-500"
                  }`}
                >
                  {house.status}
                </span>
              </td>

              <td className="p-4">
                <button
                  onClick={() => onViewQR(house)}
                  className="bg-teal-600 hover:bg-teal-700 text-white px-3 py-2 rounded-lg"
                >
                  View QR
                </button>
              </td>

              <td className="p-4 space-x-2">
                <button
                  onClick={() => onEdit(house)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
                >
                  Edit
                </button>

                <button
                  onClick={() => onDelete(house)}
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}

          {households.length === 0 && (
            <tr>
              <td
                colSpan="7"
                className="text-center py-8 text-gray-500"
              >
                No households found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default HouseholdTable;