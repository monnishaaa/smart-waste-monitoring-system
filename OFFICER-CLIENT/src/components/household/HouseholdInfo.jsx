function HouseholdInfo({ household }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-6">

      <h2 className="text-2xl font-bold mb-6 text-green-700">
        Household Information
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <div>
          <label className="font-semibold text-gray-600">Household ID</label>
          <p>{household.id}</p>
        </div>

        <div>
          <label className="font-semibold text-gray-600">Family Card No</label>
          <p>{household.familyCard}</p>
        </div>

        <div>
          <label className="font-semibold text-gray-600">Head of Family</label>
          <p>{household.head}</p>
        </div>

        <div>
          <label className="font-semibold text-gray-600">Phone Number</label>
          <p>{household.phone}</p>
        </div>

        <div>
          <label className="font-semibold text-gray-600">Ward</label>
          <p>{household.ward}</p>
        </div>

        <div>
          <label className="font-semibold text-gray-600">Address</label>
          <p>{household.address}</p>
        </div>

        <div>
          <label className="font-semibold text-gray-600">
            Reward Points
          </label>

          <p className="text-green-600 font-bold text-xl">
             {household.rewardPoints}
          </p>
        </div>

        <div>
          <label className="font-semibold text-gray-600">
            Penalty Points
          </label>

          <p className="text-red-600 font-bold text-xl">
             {household.penaltyPoints}
          </p>
        </div>

      </div>

    </div>
  );
}

export default HouseholdInfo;