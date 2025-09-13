const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { connectDB } = require('./config/connDB');
const authRouter = require('./router/authRouter');
const { checkReq } = require('./middleware/checkREQ');

require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());
app.use(checkReq);

connectDB();

app.use('/auth', authRouter);

mongoose.connection.once('connected', () => {
    console.log('Connected to MongoDB');

    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => {
        console.log(`Auth-Server running on port ${PORT}`);
    });
});

mongoose.connection.on('error', err => {
    console.error('MongoDB Connection Error:', err);
});
