const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { connectDB } = require("./config/connDB");
const postsRouter = require("./router/postsRouter");
const { checkReq } = require("./middleware/checkREQ");

require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

connectDB();

app.use("/posts", checkReq, postsRouter);

mongoose.connection.once("connected", () => {
    console.log("Connected to MongoDB");

    const PORT = process.env.PORT || 4002
;
    app.listen(PORT, () => {
        console.log(` Posts-Server running on port ${PORT}`);
    });
});
