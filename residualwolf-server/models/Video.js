const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const videoSchema = new Schema(
  {
      url: {
          type: String
      },
      tags: []
    },
  { timestamps: true }
);

module.exports = mongoose.model('Video', videoSchema, 'videos');