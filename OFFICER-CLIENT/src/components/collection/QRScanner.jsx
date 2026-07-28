import { Scanner } from "@yudiel/react-qr-scanner";

function QRScanner({ onScan, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">

      <div className="bg-white rounded-xl p-6 w-[500px]">

        <h2 className="text-2xl font-bold text-green-700 mb-4">
          Scan Household QR Code
        </h2>

        <Scanner
          onScan={(result) => {
            if (result.length > 0) {
              onScan(result[0].rawValue);
            }
          }}
          onError={(error) => console.log(error)}
        />

        <button
          onClick={onClose}
          className="mt-5 w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700"
        >
          Close Scanner
        </button>

      </div>

    </div>
  );
}

export default QRScanner;