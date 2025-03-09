const express = require("express");
const bcrypt = require("bcryptjs");
const multer = require("multer");
const User = require("../models/User.js");

const router = express.Router();

// Multer setup for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage });

// Signup Route
router.post("/signup", upload.single("profilePicture"), async (req, res) => {
    try {
      console.log(req.body); // Debugging line
  
      const { fullName, email, username, password, userType } = req.body;
  
      if (!fullName || !email || !password) {
        return res.status(400).json({ error: "All required fields must be filled." });
      }
  
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ error: "Email already in use." });
      }
  
      const hashedPassword = await bcrypt.hash(password, 10);
  
      const newUser = new User({
        fullName,
        email,
        username,
        password: hashedPassword,
        userType,
        profilePicture: req.file ? `/uploads/${req.file.filename}` : null,
      });
  
      await newUser.save();
      res.status(201).json({ message: "User registered successfully!" });
    } catch (error) {
      res.status(500).json({ error: "Signup failed. Please try again." });
    }
  });

  router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ error: "User not found" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ error: "Invalid credentials" });
        }

        res.json({ message: "Login successful!" });
    } catch (error) {
        res.status(500).json({ error: "Something went wrong" });
    }
});
router.get("/signup", (req, res) => {
    res.json({ message: "Signup route is working!" });
  });
  
  
module.exports = router;