function DashboardHeader() {
  const today = new Date().toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="bg-white rounded-xl shadow-md p-8 flex justify-between items-center">

      <div>

        <h1 className="text-5xl font-bold text-gray-800">
          Welcome, Officer 👋
        </h1>

        <p className="text-gray-500 mt-8 text-lg">
          Today's Date
        </p>

        <p className="text-3xl font-semibold text-gray-800">
          {today}
        </p>

      </div>

    </div>
  );
}

export default DashboardHeader;