const Video = require("../../models/Video");
const mongoose = require('mongoose');

exports.getCategories = async (req, res) => {
    try {
        const videos = await Video.find();
        res.status(200).json({ videos, status: true });
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: 'internal server error', status: false });
    }
}

exports.createCategory = async (req, res) => {
    try {
        const video = await Video.create(req.body);
        res.status(200).json({ video, status: true });
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: 'internal server error', status: false });
    }
}

exports.updateCategory = async (req, res) => {
    try {
        console.log(req.body);
        const video = await Video.findByIdAndUpdate(req.params.id,req.body);
        res.status(200).json({ video, status: true });
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: 'internal server error', status: false });
    }
}

exports.deleteCategory = async (req, res) => {
    try {
        const video = await Video.findByIdAndDelete(req.params.id);
        res.status(200).json({ video, status: true });
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: 'internal server error', status: false });
    }
}