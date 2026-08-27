import axios from "axios"
// const BASE_URL = "http://localhost:5000/api/profile"
// Access Vite environment variable with fallback to localhost for safety
const API_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000"
const BASE_URL = `${API_URL}/api/profile`
export const getProfile = async()=>{
    const response = await axios.get(BASE_URL)
    return response.data
}                  