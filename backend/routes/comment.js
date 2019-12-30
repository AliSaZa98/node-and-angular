const express = require("express");

const CommentController = require("../controllers/comment");

const checkAuth = require("../middleware/check-auth");

const router = express.Router();

router.post("", checkAuth,  CommentController.createComment);


router.get("", CommentController.getComments);

router.get("/:id", CommentController.getComment);

router.delete("/:id", checkAuth, CommentController.deleteComment);

module.exports = router;
