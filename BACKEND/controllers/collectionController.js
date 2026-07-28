import Collection from "../models/Collection.js";
import Household from "../models/Household.js";

// ================================
// Add Collection Record
// ================================

export const addCollection = async (req, res) => {
  try {
    const {
      householdId,
      collectionDate,
      wasteCollection,
      officer,
      remarks,
    } = req.body;

    // Check household exists
    const household = await Household.findOne({
      householdId,
    });

    if (!household) {
      return res.status(404).json({
        message: "Household not found.",
      });
    }

    // Prevent duplicate entry for same day
    const existing = await Collection.findOne({
      householdId,
      collectionDate,
    });

    if (existing) {
      return res.status(400).json({
        message:
          "Collection has already been recorded for this household today.",
      });
    }

    // Calculate Reward & Penalty
    let rewardPoints = 0;
    let penaltyPoints = 0;

    switch (wasteCollection) {
      case "Properly Segregated":
        rewardPoints = 5;
        break;

      case "Mixed Waste":
        penaltyPoints = 2;
        break;

      case "Wet Waste Only":
        rewardPoints = 2;
        break;

      case "Dry Waste Only":
        rewardPoints = 2;
        break;

      case "House Locked":
        break;

      case "No Waste Given":
        break;

      default:
        break;
    }

    // Save Collection
    const collection = await Collection.create({
      householdId,
      collectionDate,
      wasteCollection,
      rewardPoints,
      penaltyPoints,
      officer,
      remarks,
    });

    // Update Household totals
    household.rewardPoints += rewardPoints;
    household.penaltyPoints += penaltyPoints;

    await household.save();

    res.status(201).json(collection);
  } catch (error) {
    console.error(error);

    // MongoDB duplicate key error
    if (error.code === 11000) {
      return res.status(400).json({
        message:
          "Collection has already been recorded for this household today.",
      });
    }

    res.status(500).json({
      message: error.message,
    });
  }
};

// ================================
// Get Collection History
// ================================

export const getCollections = async (req, res) => {
  try {
    const { householdId } = req.params;

    const collections = await Collection.find({
      householdId,
    }).sort({
      collectionDate: -1,
    });

    res.json(collections);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: error.message,
    });
  }
};