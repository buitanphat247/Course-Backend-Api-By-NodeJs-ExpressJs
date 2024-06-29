const mongoose = require("mongoose");
const mongooseDelete = require("mongoose-delete");
const {
  create_customer,
  create_customer_list,
} = require("../services/CreateCustomer");
const { upload_single_file } = require("../services/FileUpload");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
});

const customerSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
});
const projectSchema = new mongoose.Schema(
  {
    name: String,
    startDate: String,
    endDate: String,
    description: String,
    customerInfor: customerSchema,
    userInfor: [
      { type: mongoose.Schema.Types.ObjectId, ref: "user_collection" },
    ],
    leader: userSchema,
    taskInfor: [
      { type: mongoose.Schema.Types.ObjectId, ref: "task_collection" },
    ],
  },
  { timestamps: true }
);
projectSchema.plugin(mongooseDelete, {
  deletedAt: true,
  overrideMethods: "all",
});
