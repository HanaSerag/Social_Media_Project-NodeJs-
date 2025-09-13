const express = require('express');
const Reel = require('../models/reel');

const router = express.Router();  // ✅ دي اللي ناقصة

// Add Reel
router.post('/add', async (req, res) => {
  try {
    const { title, videoUrl, description, userId, userName } = req.body;

    if (!title || !videoUrl || !userId || !userName) {
      return res.status(400).json({ message: "Title, VideoUrl, userId and userName are required" });
    }

    const newReel = new Reel({ title, videoUrl, description, userId, userName });
    await newReel.save();

    res.status(201).json(newReel);
  } catch (error) {
    res.status(500).json({ message: "Error adding reel", error });
  }
});

// Get Reel by ID
router.get('/:id', async (req, res) => {
  try {
    const reel = await Reel.findById(req.params.id);
    if (!reel) return res.status(404).json({ message: "Reel not found" });

    res.json(reel);
  } catch (error) {
    res.status(500).json({ message: "Error fetching reel", error });
  }
});

// Get All Reels
router.get('/', async (req, res) => {
  try {
    const reels = await Reel.find().sort({ createdAt: -1 });
    res.json(reels);
  } catch (error) {
    res.status(500).json({ message: "Error fetching reels", error });
  }
});

module.exports = router;
