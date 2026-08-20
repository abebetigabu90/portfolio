import axios from "axios";

const BASE_URL = "http://localhost:5000/api/project";

export const getProjects = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};
export const createProject = async (project) => {
  const response = await axios.post(BASE_URL, project);
  return response.data;
};
export const updateProject = async (id, project) => {
  const response = await axios.put(
    `${BASE_URL}/${id}`,
    project
  );

  return response.data;
};

export const deleteProject = async (id) => {
  const response = await axios.delete(
    `${BASE_URL}/${id}`
  );

  return response.data;
};