const express = require("express");

const router = express.Router();

// khai báo route
router.get("/", (req, res) => {
  res.send("Hello World! vs Bui Tan Phat learn backend");
});
router.get("/abc", (req, res) => {
  res.send("Hello World! vs Bui Tan Phat learn backend in route abc");
});
router.get("/buitanphat", (req, res) => {
  res.render("sample.ejs");
});

module.exports = router;
