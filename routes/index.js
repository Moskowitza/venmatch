const express = require("express");

const router = express.Router();
const htmlController = require("../controllers/htmlController");
/* GET home page. */
router.get("/", htmlController.index);

module.exports = router;
