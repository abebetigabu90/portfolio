import Skill from "./skill.model.js";

export const getSkillsService = async () => {
  const skills = await Skill.find().sort({
    order: 1,
    createdAt: -1,
  });

  return skills;
};

export const createSkillService = async (skill) => {
  const newSkill = new Skill(skill);

  await newSkill.save();

  return newSkill;
};

export const updateSkillService = async (id, skill) => {
  const updatedSkill = await Skill.findByIdAndUpdate(
    id,
    skill,
    {
      new: true,
      runValidators: true,
    }
  );

  return updatedSkill;
};

export const deleteSkillService = async (id) => {
  const deletedSkill = await Skill.findByIdAndDelete(id);

  return deletedSkill;
};