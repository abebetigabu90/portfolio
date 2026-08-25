import { loginAdminService } from "./auth.service.js";

export const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required",
      });
    }

    const token = await loginAdminService(
      email,
      password
    );

    return res.status(200).json({
      token,
    });
  } catch (error) {
    console.error(error);

    return res.status(401).json({
      message: "Invalid credentials",
    });
  }
};