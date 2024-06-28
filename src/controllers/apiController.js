const path = require("path");

const {
  get_data_home_page,
  create_new_user,
  update_user_by_id,
  delete_user,
} = require("../models/User");
const { upload_multiple_files } = require("../services/FileUpload");

const get_all_users_api = async (req, res) => {
  try {
    const data = await get_data_home_page();
    res.status(200).json({
      error: 0,
      results: data,
    });
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(500).json({
      error: 1,
      message: "An error occurred while fetching the home page data.",
    });
  }
};

const post_user_api = async (req, res) => {
  try {
    const result = await create_new_user(req.body);
    res.status(200).json({
      error: 0,
      message: "User created successfully.",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      error: 1,
      message: "An error occurred while creating a new user.",
    });
  }
};

const put_user_api_with_id = async (req, res) => {
  try {
    const results = await update_user_by_id(req.body.id, req.body);
    res.status(200).json({
      error: 0,
      message: "User updated successfully.",
      data: results,
    });
  } catch (error) {
    res.status(500).json({
      error: 1,
      message: "An error occurred while updating the user.",
    });
  }
};
const delete_user_api_with_id = async (req, res) => {
  try {
    const results = await delete_user(req.body.id);
    res.status(200).json({
      error: 0,
      message: "User deleted successfully.",
      data: results,
    });
  } catch (error) {
    res.status(500).json({
      error: 1,
      message: "An error occurred while deleting the user.",
    });
  }
};
// const post_upload_file = async (req, res) => {
//   const results = await upload_single_file(req, res);
//   if (results.error === 0) {
//     res.status(200).json({
//       error: 0,
//       message: "File uploaded successfully.",
//       data: results.data,
//       path: results.path,
//     });
//   } else {
//     res.status(500).json({
//       error: 1,
//       message: results.message,
//     });
//   }
// };

const post_upload_multiple_file = async (req, res) => {
  const results = await upload_multiple_files(req, res);
  if (results.error === 0) {
    res.status(200).json({
      error: 0,
      message: "File uploaded successfully.",
      data_success: results.data_succes,
      data_fail: results.data_fail,
      countSuccess: results.count,
    });
  } else {
    res.status(500).json({
      error: 1,
      message: results.message,
    });
  }
};

module.exports = {
  get_all_users_api,
  post_user_api,
  put_user_api_with_id,
  delete_user_api_with_id,
  post_upload_multiple_file,
};
