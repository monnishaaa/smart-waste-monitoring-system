import Household from "../models/Household.js";
import Collection from "../models/Collection.js";

export const getDashboardData = async (req, res) => {
  try {
    const { ward } = req.query;

    const householdFilter = {};

    if (ward && ward !== "All Wards") {
      householdFilter.ward = ward;
    }

    const households = await Household.find(householdFilter);

    const householdIds = households.map(
      (house) => house.householdId
    );

    const totalHouseholds = households.length;

    const activeHouseholds = households.filter(
      (house) => house.status === "Active"
    ).length;

    const inactiveHouseholds = households.filter(
      (house) => house.status === "Inactive"
    ).length;

    const collectionFilter = {};

    if (householdIds.length > 0) {
      collectionFilter.householdId = {
        $in: householdIds,
      };
    } else {
      collectionFilter.householdId = "__NONE__";
    }

    const properlySegregated =
      await Collection.countDocuments({
        ...collectionFilter,
        wasteCollection: "Properly Segregated",
      });

    const mixedWaste =
      await Collection.countDocuments({
        ...collectionFilter,
        wasteCollection: "Mixed Waste",
      });

    const wetWasteOnly =
      await Collection.countDocuments({
        ...collectionFilter,
        wasteCollection: "Wet Waste Only",
      });

    const dryWasteOnly =
      await Collection.countDocuments({
        ...collectionFilter,
        wasteCollection: "Dry Waste Only",
      });

    const houseLocked =
      await Collection.countDocuments({
        ...collectionFilter,
        wasteCollection: "House Locked",
      });

    const noWasteGiven =
      await Collection.countDocuments({
        ...collectionFilter,
        wasteCollection: "No Waste Given",
      });

    res.json({
      totalHouseholds,
      activeHouseholds,
      inactiveHouseholds,

      officers: 0,

      collectionSummary: {
        properlySegregated,
        mixedWaste,
        wetWasteOnly,
        dryWasteOnly,
        houseLocked,
        noWasteGiven,
      },
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: error.message,
    });
  }
};