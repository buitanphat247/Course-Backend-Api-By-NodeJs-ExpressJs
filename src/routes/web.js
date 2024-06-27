const express = require("express");
const {
  getCreatePage,
  getHomePage,
  postCreateUser,
  postDeleteUser,
} = require("../controllers/homeController");

const router = express.Router();

// khai báo route
router.get("/", getHomePage);
router.get("/create", getCreatePage);
router.get("/post-delete-user", postDeleteUser);

router.post("/post-create-new-user", postCreateUser);

module.exports = router;
