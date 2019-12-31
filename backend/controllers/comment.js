const Comment = require("../models/comment");

exports.createComment = (req, res, next) => {
    const comment = new Comment({
        title: req.body.title,
        desk: req.body.desk,
        author: req.body.desk,
        commentDate: new Date(),
        postId: req.body.postId
    });
    comment
        .save()
        .then(createdComment => {
            res.status(201).json({
                message: "Comment added successfully",
                comment: {
                    ...createdComment,
                    id: createdComment._id
                }
            });
        })
        .catch(error => {
            res.status(500).json({
                message: "Creating a Comment failed!"
            });
        });
};


exports.getComments = (req, res, next) => {
    const pageSize = +req.query.pagesize;
    const currentPage = +req.query.page;
    const CommentQuery = Comment.find();
    let fetchedComments;
    if (pageSize && currentPage) {
        Comment.skip(pageSize * (currentPage - 1)).limit(pageSize);
    }
    CommentQuery
        .then(documents => {
            fetchedComment = documents;
            return Comment.count();
        })
        .then(count => {
            res.status(200).json({
                message: "Comments fetched successfully!",
                Comments: fetchedComments,
                maxComments: count
            });
        })
        .catch(error => {
            res.status(500).json({
                message: "Fetching Comments failed!"
            });
        });
};

exports.getComment = (req, res, next) => {
    console.log('req.params.postId: ', req.params.id);
    console.log('i am in controleeer');
    
    Comment.find({ "postId": "5e09096a75a267526cb9a72f" })
        .then(Comment => {
            if (Comment) {
                res.status(200).json(Comment);
                console.log('Comment controller: ', Comment);
            } else {
                res.status(404).json({ message: "Comment not found!" });
            }
        })
        .catch(error => {
            res.status(500).json({
                message: "Fetching Comment failed!"
            });
        });
};

exports.deleteComment = (req, res, next) => {
    Comment.deleteOne({ _id: req.params.id, creator: req.userData.userId })
        .then(result => {
            console.log(result);
            if (result.n > 0) {
                res.status(200).json({ message: "Deletion successful!" });
            } else {
                res.status(401).json({ message: "Not authorized!" });
            }
        })
        .catch(error => {
            res.status(500).json({
                message: "Deleting Comments failed!"
            });
        });
};
