const express = require("express");
const { addPost, getPostById, deletePost } = require("../controllers/Posts/postController");

const router = express.Router();
router.post("/create", addPost);
router.get("/:id", getPostById);
router.delete("/:id", deletePost);

module.exports = router;
