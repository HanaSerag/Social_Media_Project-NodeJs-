const { fetchPOSTREQUEST, fetchGETREQUEST, fetchDELETEREQUEST } = require('../../utils/fetchServer');

const addPost = async (req, res) => {
    const { userId, content } = req.body;
    if (!userId || !content) {
        return res.status(400).json({ message: "All inputs are required" });
    }

    const data = await fetchPOSTREQUEST('http://127.0.0.1:4002/posts/create', { userId, content });
    return res.json(data);
};

const getPostById = async (req, res) => {
    const { id } = req.params;
    const data = await fetchGETREQUEST(`http://127.0.0.1:4002/posts/${id}`);
    return res.json(data);
};

const deletePost = async (req, res) => {
    const { id } = req.params;
    const data = await fetchDELETEREQUEST(`http://127.0.0.1:4002/posts/${id}`);
    return res.json(data);
};

module.exports = { addPost, getPostById, deletePost };
