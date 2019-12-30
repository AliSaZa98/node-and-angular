const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
  title: { type: String, required: true },
  desk: { type: String, required: true },
  author: { type: String, required: true },
  commnetDate: { type: Date, default: Date.now },
  postId: { type: mongoose.Schema.Types.ObjectId, ref: "post", required: true }
});

module.exports = mongoose.model("Post", commentSchema);