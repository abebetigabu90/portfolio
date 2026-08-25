import express from "express";
import {
  getProjects,
  createProject,
  updateProject,
  deleteProject,
  
} from "./project.controller.js";
import { protectAdmin } from "../../middleware/authMiddleware.js";
const router = express.Router();

// router.get("/", getProjects);
// router.post("/",protectAdmin, createProject);
// router.put("/:id",protectAdmin, updateProject);
// router.delete("/:id",protectAdmin, deleteProject);


// Public
router.get("/", getProjects);

// Admin only
router.post("/", protectAdmin, createProject);

router.put("/:id", protectAdmin, updateProject);

router.delete("/:id", protectAdmin, deleteProject);
export default router;