import {
  getSkillsService,
  createSkillService,
  updateSkillService,
  deleteSkillService,
} from "./skill.service.js";

export const getSkills = async (req, res) => {
  try {
    const skills = await getSkillsService();

    res.status(200).json(skills);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Unable to load skills",
    });
  }
};

export const createSkill = async (req, res) => {
  try {
    const skill = await createSkillService(req.body);

    res.status(201).json(skill);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Unable to create skill",
    });
  }
};

export const updateSkill = async (req, res) => {
  try {
    const skill = await updateSkillService(
      req.params.id,
      req.body
    );

    if (!skill) {
      return res.status(404).json({
        message: "Skill not found",
      });
    }

    res.status(200).json(skill);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Unable to update skill",
    });
  }
};

export const deleteSkill = async (req, res) => {
  try {
    const skill = await deleteSkillService(req.params.id);

    if (!skill) {
      return res.status(404).json({
        message: "Skill not found",
      });
    }

    res.status(200).json({
      message: "Skill deleted successfully",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Unable to delete skill",
    });
  }
};