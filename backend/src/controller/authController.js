import User from "../models/usermodel";

export const userLogin = (req, res) => {
  console.log("Login");
  res.status(200).json({ message: "Login" });
};

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
      console.log("all Feilds Required");
      return;
    }

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
      password,
      status: "Active",
      profilePic: "",
    });

    res.status(201).json({ message: "User Created", newUser });
  } catch (e) {
    console.log(e);
  }
};