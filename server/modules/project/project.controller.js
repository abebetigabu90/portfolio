import {
  getProjectsService,
  createProjectService,
  updateProjectService,
  deleteProjectService,
} from "./project.service.js";

export const getProjects = async (req, res) => {
  try {
    const projects = await getProjectsService();

    res.status(200).json(projects);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Unable to load projects",
    });
  }
};

export const createProject = async (req, res) => {
  try {
    const project = await createProjectService(req.body);

    res.status(201).json(project);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Unable to create project",
    });
  }
};
export const updateProject = async (req, res) => {
  try {
    const project = await updateProjectService(
      req.params.id,
      req.body
    );

    res.status(200).json(project);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Unable to update project",
    });
  }
};
export const deleteProject = async (req, res) => {
  try {
    const project = await deleteProjectService(
      req.params.id
    );

    res.status(200).json(project);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Unable to delete project",
    });
  }
};