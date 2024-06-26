const express = require("express");
const {
  getHomePage,
  getAbc,
  getBuiTanPhat,
  postCreateUser,
  getCreateUserPage,
} = require("../controllers/homeController");
const router = express.Router();

// khai báo route
router.get("/", getHomePage);
router.get("/abc", getAbc);
router.get("/buitanphat", getBuiTanPhat);
router.get("/create", getCreateUserPage);
router.post("/create-user", postCreateUser);

module.exports = router;
