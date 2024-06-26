const express = require("express");
const {
  getHomePage,
  getAbc,
  getBuiTanPhat,
  postCreateUser,
} = require("../controllers/homeController");
const router = express.Router();

// khai báo route
router.get("/", getHomePage);
router.get("/abc", getAbc);
router.get("/buitanphat", getBuiTanPhat);
router.post("/add-user", postCreateUser);

module.exports = router;
