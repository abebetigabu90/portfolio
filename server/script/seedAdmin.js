import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import Admin from "../features/auth/auth.model.js";

// MongoDB connection
const MONGO_URI = "mongodb://127.0.0.1:27017/portfolio";

// Admin credentials
const adminEmail = "admin@example.com";
const adminPassword = "123456";

const seedAdmin = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(MONGO_URI);
    console.log("MongoDB connected");

    // Check if admin already exists
    const existingAdmin = await Admin.findOne({ email: adminEmail });

    if (existingAdmin) {
      console.log("Admin already exists");
      return;
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(adminPassword, 10);

    // Create admin
    const admin = await Admin.create({
      email: adminEmail,
      password: hashedPassword,
    });

    console.log("Admin created successfully");
    console.log("Email:", admin.email);
    console.log("Password:", adminPassword);
  } catch (error) {
    console.error("Error seeding admin:", error);
  } finally {
    // Close MongoDB connection
    await mongoose.connection.close();
    console.log("MongoDB connection closed");
  }
};

seedAdmin();