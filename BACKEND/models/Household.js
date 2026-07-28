import mongoose from "mongoose";

const householdSchema = new mongoose.Schema(
  {
    householdId: {
      type: String,
      required: true,
      unique: true,
    },

    head: {
      type: String,
      required: true,
    },

    familyCard: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
      required: true,
    },

    ward: {
      type: String,
      required: true,
    },

    address: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      default: "Active",
    },

    rewardPoints: {
      type: Number,
      default: 0,
    },

    penaltyPoints: {
      type: Number,
      default: 0,
    },

    qrCode: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Household", householdSchema);