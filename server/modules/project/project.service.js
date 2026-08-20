import Project from "./project.model.js";

export const getProjectsService = async () => {
  const projects = await Project.find();
  return projects;
};

export const createProjectService = async (project) => {
  const newProject = new Project(project);
  await newProject.save();
  return newProject;
};
export const updateProjectService = async (id, project) => {
  return await Project.findByIdAndUpdate(
    id,
    project,
    {
      new: true,
      runValidators: true,
    }
  );
};
export const deleteProjectService = async (id) => {
  return await Project.findByIdAndDelete(id);
};