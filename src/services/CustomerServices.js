const customer_collection = require("../models/customer");
const { upload_single_file } = require("./FileUpload");

const create_customer = async (req, res) => {
  try {
    const results = req.files?.file && (await upload_single_file(req, res));
    const data = await new customer_collection({
      username: req.body.username,
      address: req.body.address,
      phone: req.body.phone,
      email: req.body.email,
      image: req.files?.file
        ? results.success_path
        : "https://vnn-imgs-a1.vgcloud.vn/image1.ictnews.vn/_Files/2020/03/17/trend-avatar-1.jpg",
      description: req.body.desc,
      age: req.body.age,
    }).save();
    return {
      error: 0,
      message: "Create customer success",
      success: data,
    };
  } catch (error) {
    return {
      error: 1,
      message: error,
      success: [],
    };
  }
};
const create_customer_list = async (req, res) => {
  const data_array = JSON.parse(req.body.data);
  const image = req.files?.file;
  const check_image_array = req.files?.file
    ? Array.isArray(req.files.file)
    : null;
  const data_success = [];
  const data_failed = [];
  for (let index = 0; index < data_array.length; index++) {
    const new_request = {
      body: data_array[index],
      files:
        (check_image_array === true && {
          file: image[index],
        }) ||
        (check_image_array === false && {
          file: image,
        }) ||
        (check_image_array === null && null),
    };
    const result = await create_customer(new_request, res, customer_collection);
    if (result.error === 0) {
      data_success.push(result.success);
    } else {
      data_failed.push(result.success);
    }
  }
  return {
    error: data_failed.length,
    message: "Create customer success",
    success: data_success,
  };
};
const delete_single_customer = async (req, res, customer_collection) => {
  try {
    const result = await customer_collection.findOneAndUpdate(
      { _id: req.body.id },
      {
        deleted: true,
      }
    );
    return {
      error: 0,
      message: "delete success",
      success: result,
    };
  } catch (error) {
    return {
      error: 1,
      message: error,
      success: [],
    };
  }
};
module.exports = {
  create_customer,
  create_customer_list,
  delete_single_customer,
};
