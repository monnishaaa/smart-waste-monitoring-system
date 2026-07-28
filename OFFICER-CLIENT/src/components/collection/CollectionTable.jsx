function CollectionTable({ households, onRecord }) {
  return (
    <div className="bg-white rounded-xl shadow-md mt-8 overflow-hidden">

      <table className="w-full">

        <thead className="bg-green-700 text-white">

          <tr>

            <th className="p-4">Household ID</th>
            <th className="p-4">Head of Family</th>
            <th className="p-4">Phone</th>
            <th className="p-4">Today's Status</th>
            <th className="p-4">Action</th>

          </tr>

        </thead>

        <tbody>

          {households.map((house) => (

            <tr
              key={house.id}
              className="border-b text-center"
            >

              <td className="p-4">{house.id}</td>

              <td>{house.head}</td>

              <td>{house.phone}</td>

              <td>

                {house.todayStatus === "Completed" ? (

                  <span className="text-green-700 font-bold">
                    ✅ Completed
                  </span>

                ) : (

                  <span className="text-orange-600 font-bold">
                    Pending
                  </span>

                )}

              </td>

              <td>

                {house.todayStatus === "Completed" ? (

                  <button
                    disabled
                    className="bg-gray-400 text-white px-4 py-2 rounded"
                  >
                    Recorded
                  </button>

                ) : (

                  <button
                    onClick={() => onRecord(house)}
                    className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded"
                  >
                    Record Collection
                  </button>

                )}

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default CollectionTable;