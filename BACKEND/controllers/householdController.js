import Household from "../models/Household.js";

// ===============================
// Get all households
// ===============================
export const getHouseholds = async (req, res) => {
  try {
    const households = await Household.find().sort({
      householdId: 1,
    });

    res.json(households);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// ===============================
// Get single household by ID
// ===============================
export const getHouseholdById = async (req, res) => {
  try {
    const household = await Household.findById(req.params.id);

    if (!household) {
      return res.status(404).json({
        message: "Household not found",
      });
    }

    res.json(household);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// ===============================
// Add household
// ===============================
export const addHousehold = async (req, res) => {
  try {
    const household = new Household(req.body);

    await household.save();

    res.status(201).json(household);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// ===============================
// Update household
// ===============================
export const updateHousehold = async (req, res) => {
  try {
    const household = await Household.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    if (!household) {
      return res.status(404).json({
        message: "Household not found",
      });
    }

    res.json(household);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// ===============================
// Delete household
// ===============================
export const deleteHousehold = async (req, res) => {
  try {
    const household = await Household.findByIdAndDelete(req.params.id);

    if (!household) {
      return res.status(404).json({
        message: "Household not found",
      });
    }

    res.json({
      message: "Household deleted successfully",
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};