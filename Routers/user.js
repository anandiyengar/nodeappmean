const express = require("express");
const router = express.Router();
const { homePage, getUser, createUser } = require("./../Controllers/user");
router.get("/",homePage);
router.get("/user",getUser);
router.get("/create",createUser);
module.exports = router