const express = require("express");
const {
  getHomePage,
  postCreateUser,
  CreateUserPage,
  postDeleteUser,
  getInforUser,
  postHandleUpdateUser,
} = require("../controllers/homeController");
const router = express.Router();

// khai báo route
router.get("/", getHomePage);
router.get("/create", CreateUserPage);
router.get("/delete", postDeleteUser);
router.get("/update", getInforUser);


router.post("/create-user", postCreateUser);
router.post("/update_user", postHandleUpdateUser);


module.exports = router;
