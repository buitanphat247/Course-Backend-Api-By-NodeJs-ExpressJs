const express = require("express");
const {
  api_get_all_users,
  api_post_new_user,
  api_put_user_with_id,
  api_delete_user_with_id,
  api_post_upload_multiple_file,
  api_get_all_customer,
  api_post_customer,
  api_delete_customer,
} = require("../controllers/apiController");

const apiRouter = express.Router();
// API users
apiRouter.get("/user", api_get_all_users);
apiRouter.post("/user", api_post_new_user);
apiRouter.put("/user", api_put_user_with_id);
apiRouter.delete("/user", api_delete_user_with_id);
// API upload file
apiRouter.post("/upload", api_post_upload_multiple_file);
// API customer
apiRouter.get("/customer", api_get_all_customer);
apiRouter.post("/customer", api_post_customer);
apiRouter.post("/customer_list", api_post_customer);
apiRouter.delete("/customer", api_delete_customer);
module.exports = apiRouter;
