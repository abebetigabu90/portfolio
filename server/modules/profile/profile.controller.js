import {profileService} from "./profile.service.js"
import {createProfileService} from "./profile.service.js"
import {updateProfileService} from "./profile.service.js"
export const getProfile = async (req,res)=>{
    const profile = await profileService()
    res.json(profile)
}
export const createProfile = async(req,res)=>{
      const profile = await createProfileService(req.body)
      res.status(201).json(profile)
}
export const updateProfile = async (req, res) => {
    try {
        const profileData = req.body;

        const updatedProfile = await updateProfileService(profileData);

        return res.json(updatedProfile);
    } catch (error) {
        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
};