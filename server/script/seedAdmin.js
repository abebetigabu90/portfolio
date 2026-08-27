import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import Admin from "../features/auth/auth.model.js";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({
  path: path.join(__dirname, "../.env"),
});

const seedAdmin = async () => {
  try {
    const MONGO_URI = process.env.MONGO_URI;

    if (!MONGO_URI) {
      throw new Error("MONGO_URI is not defined in .env");
    }

    const adminEmail = process.env.ADMIN_EMAIL;
    const adminPassword = process.env.ADMIN_PASSWORD;

    if (!adminEmail || !adminPassword) {
      throw new Error(
        "ADMIN_EMAIL or ADMIN_PASSWORD is not defined in .env"
      );
    }

    await mongoose.connect(MONGO_URI);

    console.log("MongoDB connected");

    const existingAdmin = await Admin.findOne({
      email: adminEmail,
    });

    if (existingAdmin) {
      console.log("Admin already exists");
      return;
    }

    const hashedPassword = await bcrypt.hash(
      adminPassword,
      10
    );

    const admin = await Admin.create({
      email: adminEmail,
      password: hashedPassword,
    });

    console.log("Admin created successfully");
    console.log("Email:", admin.email);
  } catch (error) {
    console.error("Error seeding admin:", error);
  } finally {
    await mongoose.connection.close();
    console.log("MongoDB connection closed");
  }
};

seedAdmin();