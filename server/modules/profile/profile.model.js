import mongoose from "mongoose"
const profileSchema = new mongoose.Schema(
{
    name: {
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true,
    },
    email:{type:String,
           required:true,
           unique:true
    },
    location:{
        type:String,
        required:true
    }
}
)
const profile = mongoose.model("profile",profileSchema)
export default profile