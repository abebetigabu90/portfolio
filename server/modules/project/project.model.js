import mongoose from "mongoose"
const projectSchema = new mongoose.Schema(
{    title: {type:String,
            required:true
    },
    description:{
        type:String,required:true
    },
    technologies: {
        type:[String],
    },
    githubUrl:{
        type:String,
    },
    image:{
        type:String
    },
    liveDemoUrl:{type:String,
    },
    featured:{type:Boolean,default:false},
    status:{type:String,enum:["Completed","In Progress"],default:"Completed"},
    // category:{type: String}
},{
    timestamps:true
}
)
const project = mongoose.model("project", projectSchema)
export default project