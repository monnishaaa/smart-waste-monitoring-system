import express from "express";

import {
  getHouseholds,
  getHouseholdById,
  addHousehold,
  updateHousehold,
  deleteHousehold,
} from "../controllers/householdController.js";

const router = express.Router();

// Get all households
router.get("/", getHouseholds);

// Get one household by MongoDB _id
router.get("/:id", getHouseholdById);

// Add a new household
router.post("/", addHousehold);

// Update a household
router.put("/:id", updateHousehold);

// Delete a household
router.delete("/:id", deleteHousehold);

export default router;