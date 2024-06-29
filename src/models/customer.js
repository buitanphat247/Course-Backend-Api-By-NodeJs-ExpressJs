const mongoose = require("mongoose");
const mongooseDelete = require("mongoose-delete");

const {
  create_customer,
  create_customer_list,
} = require("../services/CreateCustomer");
const delete_single_customer = require("../services/DeleteCustomer");

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
customerSchema.plugin(mongooseDelete, {
  deletedAt: true,
  overrideMethods: "all",
});
module.exports = {
  get_customer: async () => {
    try {
      const data = await customer_collection.find({});
      return data;
    } catch (error) {
      return false;
    }
  },
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
};
