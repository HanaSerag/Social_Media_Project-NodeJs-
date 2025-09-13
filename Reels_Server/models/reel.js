const mongoose = require('mongoose');

const reelSchema = new mongoose.Schema({
  title: { type: String, required: true },
  videoUrl: { type: String, required: true }, // لينك الفيديو
  description: { type: String },

  // ربط الريل باليوزر اللي عمله
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  userName: { type: String, required: true }, // ممكن نخزن اسم اليوزر عشان نعرضه بسرعة

  createdAt: { type: Date, default: Date.now }
});

const Reel = mongoose.model('Reel', reelSchema);
module.exports = Reel;
