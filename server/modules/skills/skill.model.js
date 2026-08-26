// import mongoose from "mongoose";

// const skillSchema = new mongoose.Schema(
//   {
//     name: {
//       type: String,
//       required: true,
//       trim: true,
//     },

//     category: {
//       type: String,
//       required: true,
//       enum: [
//         "Frontend",
//         "Backend",
//         "Database",
//         "Tools",
//         "Other",
//       ],
//     },

//     level: {
//       type: String,
//       enum: ["Beginner", "Intermediate", "Advanced"],
//       default: "Intermediate",
//     },

//     icon: {
//       type: String,
//       default: "",
//     },

//     description: {
//       type: String,
//       default: "",
//     },

//     order: {
//       type: Number,
//       default: 0,
//     },

//     featured: {
//       type: Boolean,
//       default: false,
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// const Skill = mongoose.model("Skill", skillSchema);

// export default Skill;



import mongoose from "mongoose";

const skillSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    category: {
      type: String,
      required: true,
      enum: [
        "Frontend",
        "Backend",
        "Database",
        "Programming",
        "Tools",
        "DevOps",
        "Other",
      ],
    },

    // level: {
    //   type: String,
    //   enum: ["Beginner", "Intermediate", "Advanced"],
    //   default: "Intermediate",
    // },
    proficiency: {
      type: Number,
      min: 0,
      max: 100,
      default: 70,
    },
    // icon: {
    //   type: String,
    //   default: "",
    //   trim: true,
    // },

    description: {
      type: String,
      default: "",
      trim: true,
    },

    order: {
      type: Number,
      default: 0,
    },

    featured: {
      type: Boolean,
      default: false,
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const Skill = mongoose.model("Skill", skillSchema);

export default Skill;