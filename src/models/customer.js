const mongoose = require("mongoose");
const mongooseDelete = require("mongoose-delete");
require("../services/CustomerServices");

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

module.exports = customer_collection;
