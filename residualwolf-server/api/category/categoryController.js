const Category = require("../../models/Category");
const mongoose = require('mongoose');

exports.getCategories = async (req, res) => {
    try {
        const categories = await Category.find();
        res.status(200).json({ categories, status: true });
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: 'internal server error', status: false });
    }
}

exports.createCategory = async (req, res) => {
    try {
        const category = await Category.create(req.body);
        res.status(200).json({ category, status: true });
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: 'internal server error', status: false });
    }
}

exports.updateCategory = async (req, res) => {
    try {
        const category = await Category.findByIdAndUpdate(req.params.id,req.body);
        res.status(200).json({ category, status: true });
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: 'internal server error', status: false });
    }
}

exports.deleteCategory = async (req, res) => {
    try {
        const category = await Category.findByIdAndDelete(req.params.id);
        res.status(200).json({ category, status: true });
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: 'internal server error', status: false });
    }
}