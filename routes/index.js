var express = require("express");
var isAuthenticated = require("../middlewares/is_authenticated");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index");
});

router.get("/home", isAuthenticated, function (req, res, next) {
  res.render("home");
});

module.exports = router;