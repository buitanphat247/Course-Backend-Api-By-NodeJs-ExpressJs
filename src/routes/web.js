const express = require("express");
const {
  getHomePage,
  getAbc,
  getBuiTanPhat,
} = require("../controllers/homeController");
const router = express.Router();

// khai báo route
router.get("/", getHomePage);
router.get("/abc", getAbc);
router.get("/buitanphat", getBuiTanPhat);


module.exports = router;
