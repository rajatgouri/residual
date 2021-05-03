const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema(
  {
    userId: {
      type: String,
      ref: "User",
    },
    blogId: {
      type: String,
      ref: "Blog",
    },
    text: {
      type: String,
    },
    userName: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Comment', commentSchema, 'comments');