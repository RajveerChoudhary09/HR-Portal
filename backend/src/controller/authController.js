import User from "../models/usermodel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret_key";

// Register
export const userRegister = async (req, res) => {
  try {
    const {
      fullName,
      email,
      phone,
      gender,
      dob,
      qualification,
      department,
      position,
      hiringDate,
      salary,
      password,
    } = req.body;

    if (
      !fullName ||
      !email ||
      !phone ||
      !qualification ||
      !department ||
      !position ||
      !hiringDate ||
      !salary ||
      !password ||
      !gender ||
      !dob
    ) {
      return res.status(400).json({ message: "All fields required" });
    }

    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      fullName,
      email,
      phone,
      gender,
      dob,
      qualification,
      department,
      position,
      hiringDate,
      salary,
      password: hashedPassword,
      status: "Active",
      profilePic: "",
    });

    res.status(201).json({ message: "User Created", user: newUser });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Server error" });
  }
};

// Login
export const userlogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const isPasswordValid = await bcrypt.compare(password, existingUser.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

 
    const token = jwt.sign(
      { userId: existingUser._id, email: existingUser.email },
      JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.status(200).json({
      message: "Login successful",
      user: {
        email: existingUser.email,
        fullName: existingUser.fullName,
        phone: existingUser.phone,
        department: existingUser.department,
      
      },
      token,
    });
  } catch (e) {
    console.error("Login error:", e);
    res.status(500).json({ message: "Internal server error" });
  }
};


