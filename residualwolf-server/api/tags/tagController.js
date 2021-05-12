const Tag = require("../../models/Tags");
const mongoose = require('mongoose');

exports.getCategories = async (req, res) => {
    try {
        const tags = await Tag.find();
        res.status(200).json({ tags, status: true });
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: 'internal server error', status: false });
    }
}

exports.createCategory = async (req, res) => {
    try {
        const tag = await Tag.create(req.body);
        res.status(200).json({ tag, status: true });
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: 'internal server error', status: false });
    }
}

exports.updateCategory = async (req, res) => {
    try {
        const tag = await Tag.findByIdAndUpdate(req.params.id,req.body);
        res.status(200).json({ tag, status: true });
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: 'internal server error', status: false });
    }
}

exports.deleteCategory = async (req, res) => {
    try {
        const tag = await Tag.findByIdAndDelete(req.params.id);
        res.status(200).json({ tag, status: true });
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: 'internal server error', status: false });
    }
}