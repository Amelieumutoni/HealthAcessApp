import express from "express";
import cors from "cors";
import dotenv from "dotenv";  // Import dotenv
import mongoose from "mongoose";  // Import mongoose

dotenv.config();  // Load .env variables

// App config
const app = express();
const port = process.env.PORT || 4000;

// MongoDB connection setup
const uri = process.env.MONGODB_URI;

mongoose
  .connect(uri)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
import userRouter from "./routes/userRoute.js";
import doctorRouter from "./routes/doctorRoute.js";
import adminRouter from "./routes/adminRoute.js";

app.use("/api/user", userRouter);
app.use("/api/admin", adminRouter);
app.use("/api/doctor", doctorRouter);

// API endpoint
app.get("/", (req, res) => {
  res.send("API Working");
});

// Start server
app.listen(port, () => console.log(`Server started on PORT:${port}`));
