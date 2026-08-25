import express from "express"
import profileRoutes from "./modules/profile/profile.routes.js"
import projectRoutes from "./modules/project/project.route.js";
import authRoutes from "./features/auth/auth.route.js";
import cors from "cors"
import "dotenv/config";
const app = express()
app.use(cors())
app.use(express.json());
app.use("/api/profile",profileRoutes)
app.use("/api/project",projectRoutes)
app.use("/api/auth", authRoutes);
export default app
