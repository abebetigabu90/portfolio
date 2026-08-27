import axios from "axios";

// const BASE_URL = "http://localhost:5000/api/skills";
// Access Vite environment variable with fallback to localhost for safety
const API_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000"
const BASE_URL = `${API_URL}/api/skills`
// Public
export const getSkills = async () => {
  const response = await axios.get(BASE_URL);

  return response.data;
};

// Admin
export const createSkill = async (skill) => {
  const token = localStorage.getItem("adminToken");

  const response = await axios.post(
    BASE_URL,
    skill,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};

// Admin
export const updateSkill = async (id, skill) => {
  const token = localStorage.getItem("adminToken");

  const response = await axios.put(
    `${BASE_URL}/${id}`,
    skill,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};

// Admin
export const deleteSkill = async (id) => {
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
