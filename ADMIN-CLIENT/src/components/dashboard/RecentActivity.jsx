const activities = [
  "🏠 Household HH0004 added",
  "📱 QR Code generated for HH0003",
  "👮 Officer Ravi added",
  "📝 Household HH0002 updated",
  "🗑 Household HH0005 removed",
];

function RecentActivity() {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 mt-8">

      <h2 className="text-2xl font-bold text-teal-700 mb-5">
        Recent Activities
      </h2>

      <div className="space-y-4">

        {activities.map((activity, index) => (

          <div
            key={index}
            className="border-b pb-3"
          >
            {activity}
          </div>

        ))}

      </div>

    </div>
  );
}

export default RecentActivity;