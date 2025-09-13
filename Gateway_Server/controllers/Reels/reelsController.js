const { fetchPOSTREQUEST, fetchGETREQUEST } = require('../../utils/fetchServer');

const addReel = async (req, res) => {
  try {
    const { title, videoUrl, description, userId, userName } = req.body;
    if (!title || !videoUrl || !userId || !userName) {
      return res.status(400).json({ message: "All inputs are required" });
    }

    const data = await fetchPOSTREQUEST(
      "http://127.0.0.1:4000/reels/add",
      { title, videoUrl, description, userId, userName }
    );

    return res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Gateway error", error });
  }
};

const getReelById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await fetchGETREQUEST(`http://127.0.0.1:4000/reels/${id}`);
    return res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Gateway error", error });
  }
};

const getAllReels = async (req, res) => {
  try {
    const data = await fetchGETREQUEST("http://127.0.0.1:4000/reels");
    return res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Gateway error", error });
  }
};

module.exports = { addReel, getReelById, getAllReels };
