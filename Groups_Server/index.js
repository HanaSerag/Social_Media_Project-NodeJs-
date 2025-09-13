const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const groupRoutes = require('./routes/groupRoutes');

dotenv.config();
const app = express();
app.use(express.json());

app.use('/groups', groupRoutes);

const PORT = process.env.PORT || 4002;

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log(' MongoDB connected');
    app.listen(PORT, () => console.log(` Groups Server running on port ${PORT}`));
  })
  .catch(err => {
    console.error('MongoDB connection failed:', err.message);
    process.exit(1);
  });
