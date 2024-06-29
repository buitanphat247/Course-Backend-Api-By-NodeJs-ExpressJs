const {
  get_data_home_page,
  create_new_user,
  update_user_by_id,
  delete_user,
} = require("../models/User");
const {
  upload_multiple_files,
  upload_single_file,
} = require("../services/FileUpload");
const {
  get_customer,
  post_customer,
  delete_customer,
} = require("../models/customer");

module.exports = {
  // API users
  api_get_all_users: async (req, res) => {
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
  },
  api_post_new_user: async (req, res) => {
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
  },
  api_put_user_with_id: async (req, res) => {
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
  },
  api_delete_user_with_id: async (req, res) => {
    const results = await delete_user(req.body.id);
    res.status(200).json({
      error: 0,
      message: "User deleted successfully.",
      data: results,
    });
  },
  // API upload file
  api_post_upload_multiple_file: async (req, res) => {
    const results = Array.isArray(req.files?.file)
      ? await upload_multiple_files(req, res)
      : await upload_single_file(req, res);
    res.status(200).json({
      error: results.error,
      message: results.message,
      data_success: results.success,
      data_failed: results.failed,
    });
  },
  // API customer
  api_get_all_customer: async (req, res) => {
    try {
      const data = await get_customer();
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
  },
  api_post_customer: async (req, res) => {
    const data_customer = req.body?.data ? JSON.parse(req.body.data) : req.body;
    if (req.body?.data) {
      const results_create_customer_list = await post_customer(req, res, true);
      res.status(200).json(results_create_customer_list);
    } else {
      const results_create_customer = await post_customer(req, res, false);
      res.status(200).json(results_create_customer);
    }
  },
  api_delete_customer: async (req, res) => {
    const results = await delete_customer(req, res);
    res.status(200).json({
      error: results.error,
      message: results.message,
      data: results.success,
    });
  },
};
