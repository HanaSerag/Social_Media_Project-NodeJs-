const express = require("express");
const { addReel, getReelById, getAllReels } = require("../controllers/Reels/reelsController");

const router = express.Router();

router.post("/add", addReel);
router.get("/:id", getReelById);
router.get("/", getAllReels);

module.exports = router;
