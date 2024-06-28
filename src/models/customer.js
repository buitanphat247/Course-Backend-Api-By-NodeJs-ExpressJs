const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema(
  {
    username: String,
    address: String,
    phone: String,
    email: String,
    image: String,
    description: String,
  },
  { timestamp: true }
);
const customer_collection = mongoose.model("customer", customerSchema);
module.exports = customer_collection;
