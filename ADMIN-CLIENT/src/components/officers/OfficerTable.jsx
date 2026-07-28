function OfficerTable({ officers, onEdit, onDelete }) {
  return (
    <div className="bg-white rounded-xl shadow overflow-hidden">
      <table className="w-full">
        <thead className="bg-teal-700 text-white">
          <tr>
            <th className="p-4">Officer ID</th>
            <th className="p-4">Name</th>
            <th className="p-4">Ward</th>
            <th className="p-4">Phone</th>
            <th className="p-4">Email</th>
            <th className="p-4">Status</th>
            <th className="p-4">Actions</th>
          </tr>
        </thead>

        <tbody>
          {officers.map((officer) => (
            <tr key={officer.id} className="border-b hover:bg-gray-50">
              <td className="p-4">{officer.id}</td>
              <td className="p-4">{officer.name}</td>
              <td className="p-4">{officer.ward}</td>
              <td className="p-4">{officer.phone}</td>
              <td className="p-4">{officer.email}</td>

              <td className="p-4">
                <span
                  className={`px-3 py-1 rounded-full text-white text-sm ${
                    officer.status === "Active"
                      ? "bg-green-600"
                      : "bg-red-600"
                  }`}
                >
                  {officer.status}
                </span>
              </td>

              <td className="p-4 space-x-2">
                <button
                  onClick={() => onEdit(officer)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
                >
                  Edit
                </button>

                <button
                  onClick={() => onDelete(officer)}
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}

          {officers.length === 0 && (
            <tr>
              <td colSpan="7" className="text-center py-8 text-gray-500">
                No officers found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default OfficerTable;