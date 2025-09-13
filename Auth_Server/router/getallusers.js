// router/authRouter.js
const express = require("express");
const User = require("../models/users");
const router = express.Router();

router.get("/getallusers", async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: "Error fetching users" });
  }
});

module.exports = router;
