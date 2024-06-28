const mongoose = require("mongoose");
const { upload_multiple_files } = require("../services/FileUpload");

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
  { timestamp: true }
);
const customer_collection = mongoose.model("customer", customerSchema);

const create_new_customer = async (req, res) => {
  try {
    const results = await upload_multiple_files(req, res);
    const data = await new customer_collection({
      username: req.body.username,
      address: req.body.address,
      phone: req.body.phone,
      email: req.body.email,
      image: results.data_succes.path,
      description: req.body.desc,
      age: req.body.age,
    }).save();
    return {
      error: 0,
      data: data,
    };
  } catch (error) {
    return {
      error: 1,
      message: error,
    };
  }
};

module.exports = { create_new_customer };
