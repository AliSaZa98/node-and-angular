const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
  title: { type: String, required: true },
  parentId: { type: String, required: true },
  path: { type: String, required: true },
});

module.exports = mongoose.model("category", categorySchema);