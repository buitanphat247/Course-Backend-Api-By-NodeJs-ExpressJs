const mongoose = require("mongoose");
const mongooseDelete = require("mongoose-delete");
const mongooseTimestamp = require("mongoose-timestamp");
const {
  create_customer,
  create_customer_list,
} = require("../services/CreateCustomer");
const delete_single_customer = require("../services/DeleteCustomer");
const mongoosePaginate = require("mongoose-paginate-v2");
const { upload_single_file } = require("../services/FileUpload");

const customerSchema = new mongoose.Schema(
  {
    username: String,
    address: String,
    phone: String,
    email: String,
    image: String,
    description: String,
    age: String,
  },
  { timestamps: true }
);
const customer_collection = mongoose.model("customer", customerSchema);
customerSchema.plugin(mongooseDelete, {
  deletedAt: true,
  overrideMethods: "all",
});
const get_customer_by_id = async (id) => {
  try {
    const data = await customer_collection.findById(id);
    return {
      data,
      error: 0,
      message: "Find customer succcess",
    };
  } catch (error) {
    return {
      error: 1,
      data: null,
      message: error,
    };
  }
};
module.exports = {
  get_customer: async () => {
    try {
      const data = await customer_collection.find({});
      return data;
    } catch (error) {
      return false;
    }
  },
  get_customer_by_id,
  post_customer: async (req, res, check_array) => {
    if (check_array === false) {
      return await create_customer(req, res, customer_collection);
    } else {
      return await create_customer_list(req, res, customer_collection);
    }
  },
  delete_customer: async (req, res) => {
    const resul_delete_sigle_customer = await delete_single_customer(
      req,
      res,
      customer_collection
    );
    return resul_delete_sigle_customer;
  },
  get_customer_paginate: async (req, res) => {
    try {
      const limit = 20;
      const currentPage = parseInt(req.query.page);
      const skip = (currentPage - 1) * limit;
      const totalDocs = await customer_collection.countDocuments({});
      const totalPages = Math.ceil(totalDocs / limit);
      const data = await customer_collection.find({}).skip(skip).limit(limit);
      return {
        error: 0,
        data,
        currentPage,
        totalPages,
      };
    } catch (error) {
      return {
        error: 1,
        message: "An error occurred while fetching the customer data.",
      };
    }
  },
  update_customer: async (req, res) => {
    const id = req.body.id;
    const data = req.body;
    const { username, email, address, phone, desc, age } = data;
    const data_customer_current = (await get_customer_by_id(id)).data;
    const image_customer_current = data_customer_current.image;
    const image_customer_new =
      req.files !== null
        ? (await upload_single_file(req, res)).success_path
        : image_customer_current;
    try {
      const result_update = await customer_collection.findByIdAndUpdate(id, {
        username,
        email,
        address,
        phone,
        desc,
        age,
        image: image_customer_new,
      });
      return {
        error: 0,
        message: "Update customer success",
        data: result_update,
      };
    } catch (error) {
      return {
        error: 1,
        message: error,
        data: null,
      };
    }
  },
};
