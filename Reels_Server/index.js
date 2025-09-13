const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const reelRoutes = require('./routes/reelRoutes');

dotenv.config();
const app = express();
app.use(express.json());

app.use('/reels', reelRoutes);

const PORT = process.env.PORT || 7000;

// Connect to MongoDB first, then start server
const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ MongoDB connected');

    app.listen(PORT, () => {
      console.log(`🚀 Reels Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error('❌ MongoDB connection failed:', error.message);
    process.exit(1); // يوقف البرنامج لو الداتا بيز مش شغالة
  }
};

startServer();
