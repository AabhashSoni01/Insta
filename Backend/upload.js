const mongoose = require("mongoose");
mongoose.Schema({
  imgUrl: {
    type: String,
    required: true,
  },
  likeCount: {
    type: Number,
    default: 0,
  },
});

let Upload = mongosh.model("Upload",uploadSchema)

module.exports = Upload;