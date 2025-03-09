const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const multer = require("multer");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("./models/userModel");
const Campaign = require("./models/campaignModel");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// File Upload Middleware
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});
const upload = multer({ storage });

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/crowdfunding", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.error("❌ MongoDB Connection Error:", err));

// Middleware for token authentication
const verifyToken = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) return res.status(401).json({ message: "Access Denied. No token provided." });

  try {
    const verified = jwt.verify(token.replace("Bearer ", ""), process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (error) {
    res.status(400).json({ message: "Invalid Token." });
  }
};

// 🔹 User Signup
app.post("/api/auth/signup", upload.single("profilePicture"), async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) return res.status(400).json({ message: "All fields are required." });

    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "Email already in use." });

    const hashedPassword = await bcrypt.hash(password, 10);
    const profilePicture = req.file ? req.file.path : null;

    const newUser = new User({ name, email, password: hashedPassword, profilePicture });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully!" });
  } catch (error) {
    console.error("Signup Error:", error);
    res.status(500).json({ error: "Signup failed. Try again!" });
  }
});

// 🔹 User Login
app.post("/api/auth/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: "Invalid email or password." });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.status(200).json({ message: "Login successful!", token, user });
  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ error: "Login failed. Try again!" });
  }
});

// 🔹 Create Campaign Route
app.post("/api/campaigns", verifyToken, upload.single("image"), async (req, res) => {
  try {
    const { title, description, goal, category } = req.body;
    if (!title || !description || !goal || !category) return res.status(400).json({ message: "All fields are required." });

    const newCampaign = new Campaign({
      title,
      description,
      goal,
      category,
      image: req.file ? req.file.path : null,
      creator: req.user.userId, // Get user ID from token
    });

    await newCampaign.save();
    res.status(201).json({ message: "Campaign created successfully!" });
  } catch (error) {
    console.error("Campaign Creation Error:", error);
    res.status(500).json({ error: "Failed to create campaign. Try again!" });
  }
});

// 🔹 Get All Campaigns
app.get("/api/campaigns", async (req, res) => {
  try {
    const campaigns = await Campaign.find().populate("creator", "name email");
    res.status(200).json(campaigns);
  } catch (error) {
    console.error("Fetch Campaigns Error:", error);
    res.status(500).json({ error: "Failed to fetch campaigns." });
  }
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
