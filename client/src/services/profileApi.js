import axios from "axios"
const BASE_URL = "http://localhost:5000/api/profile"
export const getProfile = async()=>{
    const response = await axios.get(BASE_URL)
    return response.data
}                  