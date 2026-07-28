import { Scanner } from "@yudiel/react-qr-scanner";

function QRScannerModal({ open, onClose, onScanSuccess }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
      <div className="bg-white rounded-xl shadow-xl p-6 w-[500px]">

        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">
            Scan Household QR
          </h2>

          <button
            onClick={onClose}
            className="text-red-600 text-2xl font-bold"
          >
            ✕
          </button>
        </div>

        <Scanner
          constraints={{
            facingMode: "environment",
          }}
          onScan={(result) => {
            if (!result || result.length === 0) return;

            const decodedText = result[0].rawValue;

            onScanSuccess(decodedText);
          }}
          onError={(error) => {
            console.error(error);
          }}
          styles={{
            container: {
              width: "100%",
            },
          }}
        />

      </div>
    </div>
  );
}

export default QRScannerModal;