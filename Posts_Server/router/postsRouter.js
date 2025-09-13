const express = require("express");
const { addPost, getPostById, deletePost } = require("../controllers/postsController");

const router = express.Router();

router.post("/add", addPost);
router.get("/:id", getPostById);
router.delete("/:id", deletePost);

module.exports = router;
