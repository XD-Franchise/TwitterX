//* Importing dependencies
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

//* Importing files
import authRoutes from "./routes/auth.routes.js";
import connectMongoDB from "./db/connectMongoDB.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); //* To parse req.body
app.use(express.urlencoded({ extended: true })); //* To parse form data in POSTMAN
app.use(cookieParser());

// console.log(process.env.MONGO_URI);

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`[server.js] Server is running on port ${PORT}`);
  connectMongoDB();
});
