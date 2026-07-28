import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db.js";

import householdRoutes from "./routes/householdRoutes.js";
import collectionRoutes from "./routes/collectionRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";

dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// ==============================
// Middleware
// ==============================
app.use(cors());
app.use(express.json());

// ==============================
// Home Route
// ==============================
app.get("/", (req, res) => {
  res.send("Smart Waste Monitoring API Running...");
});

// ==============================
// API Routes
// ==============================
app.use("/api/households", householdRoutes);
app.use("/api/collections", collectionRoutes);
app.use("/api/dashboard", dashboardRoutes);

// ==============================
// Server
// ==============================
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});