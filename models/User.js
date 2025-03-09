const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    username: { type: String, unique: true },
    password: { type: String, required: true },
    profilePicture: { type: String },
    userType: { type: String, enum: ["Backer", "Creator"], default: "Backer" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
