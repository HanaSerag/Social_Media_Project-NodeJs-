const Group = require('../models/Group');

// Create Group
const createGroup = async (req, res) => {
  try {
    const { name, description } = req.body;
    if (!name) return res.status(400).json({ message: "Group name is required" });

    const newGroup = await Group.create({ name, description });
    res.status(201).json(newGroup);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get Group by ID
const getGroupById = async (req, res) => {
  try {
    const group = await Group.findById(req.params.id);
    if (!group) return res.status(404).json({ message: "Group not found" });
    res.json(group);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Add Post to Group
const addPostToGroup = async (req, res) => {
  try {
    const { content } = req.body;
    if (!content) return res.status(400).json({ message: "Post content is required" });

    const group = await Group.findById(req.params.id);
    if (!group) return res.status(404).json({ message: "Group not found" });

    group.posts.push({ content });
    await group.save();

    res.json(group);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { createGroup, getGroupById, addPostToGroup };
