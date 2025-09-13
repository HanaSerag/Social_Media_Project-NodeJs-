const Post = require("../models/post");

const addPost = async (req, res) => {
    try {
        const { userId, content } = req.body;
        if (!userId || !content) {
            return res.status(400).json({ message: "All inputs are required" });
        }
        const newPost = new Post({ userId, content });
        await newPost.save();
        res.status(201).json({ message: "Post created successfully", post: newPost });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

const getPostById = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) return res.status(404).json({ message: "Post not found" });
        res.json(post);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

const deletePost = async (req, res) => {
    try {
        const post = await Post.findByIdAndDelete(req.params.id);
        if (!post) return res.status(404).json({ message: "Post not found" });
        res.json({ message: "Post deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

module.exports = { addPost, getPostById, deletePost };
