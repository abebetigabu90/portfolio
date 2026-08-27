// import axios from "axios";

// const BASE_URL = "http://localhost:5000/api/project";

// export const getProjects = async () => {
//   const response = await axios.get(BASE_URL);
//   return response.data;
// };
// export const createProject = async (project) => {
//   const response = await axios.post(BASE_URL, project);
//   return response.data;
// };
// export const updateProject = async (id, project) => {
//   const response = await axios.put(
//     `${BASE_URL}/${id}`,
//     project
//   );

//   return response.data;
// };

// export const deleteProject = async (id) => {
//   const response = await axios.delete(
//     `${BASE_URL}/${id}`
//   );

//   return response.data;
// };






import axios from "axios";

// const BASE_URL = "http://localhost:5000/api/project";
// Access Vite environment variable with fallback to localhost for safety
const API_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000"
const BASE_URL = `${API_URL}/api/project`
// Public — no token required
export const getProjects = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

// Admin — token required
export const createProject = async (project) => {
  const token = localStorage.getItem("adminToken");

  const response = await axios.post(
    BASE_URL,
    project,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};

// Admin — token required
export const updateProject = async (id, project) => {
  const token = localStorage.getItem("adminToken");

  const response = await axios.put(
    `${BASE_URL}/${id}`,
    project,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};

// Admin — token required
export const deleteProject = async (id) => {
  const token = localStorage.getItem("adminToken");

  const response = await axios.delete(
    `${BASE_URL}/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};