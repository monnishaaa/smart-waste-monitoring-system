import express from "express";

import {
  getCollections,
  addCollection,
} from "../controllers/collectionController.js";

const router = express.Router();

// Get history of one household
router.get("/:householdId", getCollections);

// Save collection
router.post("/", addCollection);

export default router;