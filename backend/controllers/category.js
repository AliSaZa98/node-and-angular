const Category = require("../models/category");

exports.createCategory = (req, res, next) => {
    const category = new Category({
        title: req.body.title,
        path: req.body.path,
        paentId: req.body.postId
    });
    category
        .save()
        .then(createdcategory => {
            res.status(201).json({
                message: "category added successfully",
                category: {
                    ...createdcategory,
                    id: createdcategory._id
                }
            });
        })
        .catch(error => {
            res.status(500).json({
                message: "Creating a category failed!"
            });
        });
};

exports.getCategorys = (req, res, next) => {
    Category.find()
        .then(Category => {
            if (Category) {
                res.status(200).json(Category);
                console.log('Category controller: ', Category);
            } else {
                res.status(404).json({ message: "Category not found!" });
            }
        })
        .catch(error => {
            res.status(500).json({
                message: "Fetching Category failed!"
            });
        });
};



exports.deleteCategory = (req, res, next) => {
    Category.deleteOne({ _id: req.params.id})
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
                message: "Deleting Category failed!"
            });
        });
};