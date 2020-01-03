const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
  title: { type: String, required: true },
  parenId: { type: mongoose.Schema.Types.ObjectId, required: true },
  path: { type: String, required: true },
});

module.exports = mongoose.model("category", categorySchema);