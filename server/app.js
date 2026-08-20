import express from "express"
import profileRoutes from "./modules/profile/profile.routes.js"
import projectRoutes from "./modules/project/project.route.js";
import cors from "cors"
const app = express()
app.use(cors())
app.use(express.json());
app.use("/api/profile",profileRoutes)
app.use("/api/project",projectRoutes)
export default app
