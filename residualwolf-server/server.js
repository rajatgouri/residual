const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');
const app = express();
const multer = require('multer');
const path = require('path');

const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads");
    },
    filename: (req, file, cb) => {
        let currentDate = new Date().toISOString();
        let customizedDate = currentDate.replace(/:/g, "-");
        cb(null, customizedDate + "-" + file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    if (
        file.mimetype === "image/png" ||
        file.mimetype === "image/jpg" ||
        file.mimetype === "image/jpeg"
    ) {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false }).then(
    (db) => console.log('MongoDB Connected...')),
    (err) => console.log("MongoDB " + String(err.message)
    );
app.use(cors());
app.use(express.static('client/build'));
app.use(express.urlencoded({limit: '50mb'}));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(express.json({limit: '50mb'}));

app.use(
    multer({ storage: fileStorage, fileFilter: fileFilter }).single("thumbnail")
);

app.use('/api/v1/', require('./api/blog/blogRoute'));
app.use("/api/v1/users", require("./api/user/userRoute"));
app.use("/api/v1/", require("./api/category/categoryRoute"));
app.use("/api/v1/", require("./api/videos/videoRoute"));
app.use("/api/v1/", require("./api/tags/tagRoute"));
app.use('/uploads', express.static(path.join('uploads/')));

app.listen(process.env.PORT, () => console.log(`server running on port: ${process.env.PORT}`));