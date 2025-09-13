const express = require('express');
const session = require('express-session');
require('dotenv').config();
const cors = require('cors');

const authRouter = require('./router/authRouter');
const reelsRoutes = require("./router/reelsRoutes");
const groupsRoutes = require("./router/groupsRoutes");
const postsRoutes = require("./router/postsRoutes");

const app = express();

app.use(express.json());
app.use(cors());

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: false,
        maxAge: 1000 * 60,
        httpOnly: true
    }
}));

app.use('/auth', authRouter);
app.use("/reels", reelsRoutes);
app.use("/groups", groupsRoutes);
app.use("/posts", postsRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Gateway Server is running on port ${process.env.PORT}...........`);
});
