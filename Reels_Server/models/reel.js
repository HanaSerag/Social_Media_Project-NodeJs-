const mongoose = require('mongoose');

const reelSchema = new mongoose.Schema({
  title: { type: String, required: true },
  videoUrl: { type: String, required: true },
  description: { type: String },

  // link of reel of user who made
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  userName: { type: String, required: true }, //Store username to find it in fast way

  createdAt: { type: Date, default: Date.now }
});

const Reel = mongoose.model('Reel', reelSchema);
module.exports = Reel;
