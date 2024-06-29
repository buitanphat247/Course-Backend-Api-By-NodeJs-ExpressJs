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
const projectSchema = new mongoose.Schema({
  name: String,
  startDate: String,
  endDate: String,
  description: String,
});

const taskSchema = new mongoose.Schema(
  {
    name: String,
    StartDate: String,
    endDate: String,
    description: String,
    userInfor: userSchema,
    projectInfor: projectSchema,
  },
  { timestamps: true }
);
const task_collection = mongoose.model("TaskMange", taskSchema);
taskSchema.plugin(mongooseDelete, {
  deletedAt: true,
  overrideMethods: "all",
});
module.exports = task_collection;
