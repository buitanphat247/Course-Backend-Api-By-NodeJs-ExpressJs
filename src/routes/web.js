const express = require("express");
const {
  getCreatePage,
  getHomePage,
  postCreateUser,
  postDeleteUser,
  getInforUserById,
  updateUserById,
} = require("../controllers/homeController");

const router = express.Router();

// khai báo route
router.get("/", getHomePage);
router.get("/create", getCreatePage);
router.get("/post-delete-user", postDeleteUser);
router.get("/update", getInforUserById);
router.post("/post-create-new-user", postCreateUser);
router.post("/update", updateUserById);
module.exports = router;
