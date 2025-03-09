const bcrypt = require("bcryptjs");
const User = require("../models/User");

const signup = async (req, res) => {
  try {
    const { fullName, email, username, password, userType } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ error: "Email already exists" });

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const newUser = new User({ fullName, email, username, password: hashedPassword, userType });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
};

module.exports = { signup };
