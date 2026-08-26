import express from "express";

import {
  getSkills,
  createSkill,
  updateSkill,
  deleteSkill,
} from "./skill.controller.js";

const router = express.Router();

// Public
router.get("/", getSkills);

// Admin
router.post("/", createSkill);
router.put("/:id", updateSkill);
router.delete("/:id", deleteSkill);

export default router;