import User from "../models/userModel.js";

export const register = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    // 1. validation
    if (!firstName || !lastName || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required"
      });
    }

    // 2. check existing user
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already registered"
      });
    }

    // 3. create user
    const user = await User.create({
      firstName,
      lastName,
      email,
      password
    });

    // 4. response
    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      user
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
};
