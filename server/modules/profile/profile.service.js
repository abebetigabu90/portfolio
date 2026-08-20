
// export const profileService = () =>{
//     return({
//         name:"abebe",
//         title:"backend developer",
//         email:"abebetigabu90@gmail.com"
//     })
// }
import Profile from "./profile.model.js"
export const profileService = async()=>{
    const profile = await Profile.findOne()
    return profile
}
export const createProfileService = async(profile)=>{
const  newProfile = new Profile(profile)
return await newProfile.save()
}
export const updateProfileService = async (profileData) => {
    const updatedProfile = await Profile.findOneAndUpdate(
        {},
        profileData,
        { new: true }
    );

    if (!updatedProfile) {
        throw new Error("Profile not found");
    }

    return updatedProfile;
};