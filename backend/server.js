import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import authRoutes from "./routes/auth.js";

const app = express();
const PORT = process.env.PORT || 5000;

// Use environment variable for MongoDB, fallback to local if not set
const MONGO_URI = process.env.MONGO_URL || "mongodb://127.0.0.1:27017/smartbin";

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);

// Connect to MongoDB and start server
mongoose.connect(MONGO_URI)
  .then(() => {
    console.log(`MongoDB connected at ${MONGO_URI}`);
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => console.error(err));
