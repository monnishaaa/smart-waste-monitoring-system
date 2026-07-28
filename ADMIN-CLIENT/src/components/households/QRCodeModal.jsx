import QRCode from "react-qr-code";

function QRCodeModal({ house, onClose }) {
  if (!house) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
      <div className="bg-white rounded-xl shadow-xl p-8 w-[420px] text-center">

        <h2 className="text-2xl font-bold text-teal-700 mb-4">
          Household QR Code
        </h2>

        <p className="mb-2">
          <strong>Household ID:</strong> {house.householdId}
        </p>

        <p className="mb-6">
          <strong>Head:</strong> {house.head}
        </p>

        <div className="flex justify-center bg-white p-4 rounded-lg">
          <QRCode
            value={house.householdId}
            size={300}
          />
        </div>

        <p className="mt-4 text-gray-600">
          Scan this QR code during waste collection.
        </p>

        <button
          onClick={onClose}
          className="mt-6 bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-lg"
        >
          Close
        </button>

      </div>
    </div>
  );
}

export default QRCodeModal;