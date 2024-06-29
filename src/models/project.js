const mongoose = require("mongoose");
const mongooseDelete = require("mongoose-delete");
const {
  create_customer,
  create_customer_list,
} = require("../services/CustomerServices");
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
const project_collection = mongoose.model("project", projectSchema);
projectSchema.plugin(mongooseDelete, {
  deletedAt: true,
  overrideMethods: "all",
});
module.exports = {
  create_project: async (req, res) => {
    const data = await new project_collection({
      name: req.body.name,
      startDate: req.body.startDate,
      endDate: req.body.endDate,
      description: req.body.description,
      customerInfor: {
        name: req.body.customerInfor.name,
        email: req.body.customerInfor.email,
        phone: req.body.customerInfor.phone,
      },
      leader: {
        name: req.body.leader.name,
        email: req.body.leader.email,
      },
    }).save();
    console.log(data);
    return false;
  },
};
