const express = require("express");
const { createGroup, getGroupById, addPostToGroup } = require("../controllers/Groups/groupController");

const router = express.Router();

router.post("/create", createGroup);
router.get("/:id", getGroupById);
router.post("/:id/posts", addPostToGroup);

module.exports = router;
