import express from "express";
import colors from "colors";
import morgan from "morgan";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import cors from "cors";
import path from "path";

// Config Env
dotenv.config();

// database config
connectDB();

// rest Object
const app = express();

// Cors Error Resolve
app.use(cors());

// Middleware
app.use(express.json());
app.use(morgan("dev"));

// Routes

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);

// Rest Api
app.get("/", (req, res) => {
  res.send("<h1>Welcome to ecommerce app</h1>");
});
// PORT
const PORT = process.env.PORT || 8080;

// Run server

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`.bgCyan.white);
});
