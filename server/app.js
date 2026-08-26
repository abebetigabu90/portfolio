import express from "express"
import profileRoutes from "./modules/profile/profile.routes.js"
import projectRoutes from "./modules/project/project.route.js";
import authRoutes from "./features/auth/auth.route.js";
import skillRoutes from "./modules/skills/skill.routes.js";
import contactRoutes from "./modules/contact/contact.route.js";
import cors from "cors"
import "dotenv/config";
const app = express()
app.use(cors())
app.use(express.json());
app.use("/api/profile",profileRoutes)
app.use("/api/project",projectRoutes)
app.use("/api/auth", authRoutes);
app.use("/api/skills", skillRoutes);
app.use("/api/contact", contactRoutes);
export default app
