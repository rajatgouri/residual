const Blog = require('../../models/Blog');
const Comment = require('../../models/Comment');
const User = require("../../models/User");
const mongoose = require('mongoose');
const mime = require('mime');
const fs = require('fs');

exports.getBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.status(200).json({ blogs, status: true });
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: 'internal server error', status: false });
    }
}

exports.getBlog = async (req, res) => {
    try {
        const blog = await Blog.aggregate([{
            $match: {
                _id: mongoose.Types.ObjectId(req.params.id)
            }
        }]).lookup({
            from: "comments",
            localField: "_id",
            foreignField: "blogId",
            as: "comments"
        })
        // console.log(blog)
        res.status(200).json({ blog: blog[0], status: true });
    } catch (err) {
        console.log(err)
        res.status(500).json({ msg: 'internal server error', status: false });
    }
}

exports.createBlog = async (req, res) => {
  if(!req.body.blog.title) {
    res.status(200).json({  });
  }
  let fileName,imageBuffer;
  try {
    var matches = req.body.base64image.fileOneValue.match(/^data:([A-Za-z-+/]+);base64,(.+)$/),
    response = {}; 
    response.type = matches[1];
    response.data = new Buffer(matches[2], 'base64');
    let decodedImg = response;
    imageBuffer = decodedImg.data;
    let type = decodedImg.type;
    let extension = mime.extension(type);
    fileName = req.params.id+ '.' + extension;
    const updatedBlog = {
      ...req.body.blog,
      imageUrl : fileName? fileName : req.body.blog.imageUrl
    }
    fs.writeFileSync("./uploads/" + fileName, imageBuffer, 'utf8');
    const blog = await Blog.create(updatedBlog);
    res.status(200).json({ blog, status: true });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "internal server error", status: false });
  }
}

exports.updateBlog = async (req, res) => {
  let fileName,imageBuffer;
  try {
    var matches = req.body.base64image.fileOneValue.match(/^data:([A-Za-z-+/]+);base64,(.+)$/),
    response = {}; 
    if (req.body.base64image.fileOneValue==='') {
      const updatedBlog = {
        ...req.body.blog
      }
      const blog = await Blog.findByIdAndUpdate(req.params.id, updatedBlog, {
        new: true,
      });
      res.status(200).json({ blog, status: true });
    }  else {
      response.type = matches[1];
      response.data = new Buffer(matches[2], 'base64');
      let decodedImg = response;
      imageBuffer = decodedImg.data;
      let type = decodedImg.type;
      let extension = mime.extension(type);
      fileName = req.params.id+ '.' + extension;
    }
    const updatedBlog = {
      ...req.body.blog,
      imageUrl : fileName? fileName : req.body.blog.imageUrl
    }
    fs.writeFileSync("./uploads/" + fileName, imageBuffer, 'utf8');
    const blog = await Blog.findByIdAndUpdate(req.params.id, updatedBlog, {
      new: true,
    });
    res.status(200).json({ blog, status: true });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "internal server error", status: false });
  }
};

exports.deleteBlog = async (req, res) => {
  try {
    await Blog.findByIdAndDelete(req.params.id);
    res.status(200).json({ msg: "Deleted!", status: true });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "internal server error", status: false });
  }
};

exports.createComment = async (req, res) => {
    try {
        const comment = await Comment.create(req.body);
        res.status(200).json({ comment, status: true });
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: 'internal server error', status: false });
    }
}
exports.getComment = async (req, res) => {
  try {
    const comment = await Comment.aggregate([
      {
        $match: {
          blogId: req.params.id,
        },
      },
    ]);    
    res.status(200).json({ comment, status: true });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "internal server error", status: false });
  }
};