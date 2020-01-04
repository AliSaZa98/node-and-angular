const categoryController = require("../controllers/category");

const express = require("express");

const router = express.Router();

router.post("", categoryController.createCategory);


router.get("", categoryController.getCategorys);

router.put("/:id", categoryController.editeCategory);

router.delete("/:id", categoryController.deleteCategory);

module.exports = router;