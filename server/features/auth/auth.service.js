// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";
// import Admin from "./auth.model.js";

// export const loginAdminService = async (email, password) => {
//   const admin = await Admin.findOne({ email });
//   if (!admin) {
//     throw new Error("Invalid credentials");
//   }

//   const passwordMatch = await bcrypt.compare(
//     password,
//     admin.password
//   );
//   if (!passwordMatch) {
//     throw new Error("Invalid credentials");
//   }

//   const token = jwt.sign(
//     {
//       id: admin._id,
//       email: admin.email,
//     },
//     process.env.JWT_SECRET,
//     {
//       expiresIn: "1d",
//     }
//   );

//   return token;
// };




import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Admin from "./auth.model.js";

export const loginAdminService = async (email, password) => {
  console.log("Email received:", email);

  const admin = await Admin.findOne({ email });

  console.log("Admin found:", admin);

  if (!admin) {
    throw new Error("Invalid credentials");
  }

  const passwordMatch = await bcrypt.compare(
    password,
    admin.password
  );

  console.log("Password match:", passwordMatch);

  if (!passwordMatch) {
    throw new Error("Invalid credentials");
  }

  const token = jwt.sign(
    {
      id: admin._id,
      email: admin.email,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "1d",
    }
  );

  return token;
};