const express = require("express");

const contactUsController = require("../controllers/contactUs");


const router = express.Router();

router.get("",  contactUsController.sendMail);


// router.get("", contactUsController.getPosts);


module.exports = router;