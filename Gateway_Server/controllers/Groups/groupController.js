const { fetchPOSTREQUEST, fetchGETREQUEST } = require('../../utils/fetchServer');

const createGroup = async (req, res) => {
    const { name, description } = req.body;
    if (!name) {
        return res.status(400).json({ message: "Group name is required" });
    }

    const data = await fetchPOSTREQUEST('http://127.0.0.1:4001/groups/create', { name, description });
    return res.json(data);
};

const getGroupById = async (req, res) => {
    const { id } = req.params;
    const data = await fetchGETREQUEST(`http://127.0.0.1:4001/groups/${id}`);
    return res.json(data);
};

const addPostToGroup = async (req, res) => {
    const { content } = req.body;
    if (!content) {
        return res.status(400).json({ message: "Post content is required" });
    }

    const { id } = req.params;
    const data = await fetchPOSTREQUEST(`http://127.0.0.1:4001/groups/${id}/posts`, { content });
    return res.json(data);
};

module.exports = { createGroup, getGroupById, addPostToGroup };
