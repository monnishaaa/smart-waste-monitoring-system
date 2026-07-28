function CollectionHistory({ history }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 mt-6">

      <h2 className="text-2xl font-bold text-green-700 mb-4">
        Collection History
      </h2>

      <table className="w-full border-collapse">

        <thead>

          <tr className="bg-green-700 text-white">

            <th className="p-3">Date</th>
            <th>Day</th>
            <th>Status</th>
            <th>Remarks</th>
            <th>Officer</th>

          </tr>

        </thead>

        <tbody>

          {history.map((record) => (

            <tr key={record.id} className="border-b text-center">

              <td className="p-3">{record.date}</td>
              <td>{record.day}</td>
              <td>{record.status}</td>
              <td>{record.remarks}</td>
              <td>{record.officer}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default CollectionHistory;