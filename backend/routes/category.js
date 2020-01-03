const categoryController = require("../controllers/category");

const express = require("express");

const router = express.Router();

router.post("", categoryController.createCategory);


router.get("", categoryController.getCategorys);

// router.put("",categoryController.)

router.delete("/:id", categoryController.deleteCategory);

module.exports = router;