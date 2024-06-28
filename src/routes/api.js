const express = require("express");
const {
  get_all_users_api,
  post_user_api,
  put_user_api_with_id,
  delete_user_api_with_id,
  post_upload_file,
  post_upload_multiple_file,
  post_customer_api,
} = require("../controllers/apiController");

const apiRouter = express.Router();

apiRouter.get("/user", get_all_users_api);
apiRouter.post("/user", post_user_api);
apiRouter.put("/user", put_user_api_with_id);
apiRouter.delete("/user", delete_user_api_with_id);
// apiRouter.post("/upload", post_upload_file);
apiRouter.post("/upload", post_upload_multiple_file);
apiRouter.post("/customer", post_customer_api);
module.exports = apiRouter;
