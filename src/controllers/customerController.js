const customer_collection = require("../models/customer");
const { create_customer, create_customer_list, delete_single_customer } = require("../services/CustomerServices");
const get_customer = async () => {
  try {
    const data = await customer_collection.find({});
    return {
      error: 0,
      results: data,
      message: "Get all customer success",
    };
  } catch (error) {
    return {
      error: 1,
      message: "Get all customer failed",
      results: [],
    };
  }
};

const get_customer_by_id = async (id) => {
  try {
    const data = await customer_collection.findById(id);
    console.log('data: ', data);
    return {
      error: 0,
      data,
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

const post_customer = async (req, res, check_array) => {
  if (check_array === false) {
    return await create_customer(req, res, customer_collection);
  } else {
    return await create_customer_list(req, res, customer_collection);
  }
};

const delete_customer = async (req, res) => {
  const resul_delete_sigle_customer = await delete_single_customer(
    req,
    res,
    customer_collection
  );
  return resul_delete_sigle_customer;
};
const get_customer_paginate = async (req, res) => {
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
};
const update_customer = async (req, res) => {
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
};
module.exports = {
  create_customer_list,
  create_customer,
  get_customer,
  post_customer,
  delete_customer,
  get_customer_paginate,
  update_customer,
  get_customer_by_id,
};
