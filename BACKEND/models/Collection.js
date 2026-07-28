import mongoose from "mongoose";

const CollectionSchema = new mongoose.Schema(
  {
    householdId: {
      type: String,
      required: true,
      trim: true,
    },

    collectionDate: {
      type: Date,
      required: true,
    },

    wasteCollection: {
      type: String,
      required: true,
      enum: [
        "Properly Segregated",
        "Mixed Waste",
        "Wet Waste Only",
        "Dry Waste Only",
        "House Locked",
        "No Waste Given",
      ],
    },

    rewardPoints: {
      type: Number,
      default: 0,
    },

    penaltyPoints: {
      type: Number,
      default: 0,
    },

    officer: {
      type: String,
      required: true,
    },

    remarks: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

/*
  Prevent duplicate collection entries
  for the same household on the same date.
*/
CollectionSchema.index(
  {
    householdId: 1,
    collectionDate: 1,
  },
  {
    unique: true,
  }
);

const Collection = mongoose.model(
  "Collection",
  CollectionSchema
);

export default Collection;