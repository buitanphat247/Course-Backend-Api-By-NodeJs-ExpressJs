const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
});
userSchema.plugin(AutoIncrement, { inc_field: "id" });
const user_collection = mongoose.model("UserMange", userSchema);

const get_data_home_page = async () => {
  try {
    const data = await user_collection.find({});
    return data;
  } catch (error) {
    return false;
  }
};

const delete_user = async (id) => {
  try {
    const results = await user_collection.findOneAndDelete({ id: id });
    return true;
  } catch (error) {
    return false;
  }
};

const create_new_user = async (data) => {
  try {
    const new_user = new user_collection({
      username: data.username,
      email: data.email,
      phoneNumber: data.phone,
      age: data.age,
    });
    await new_user.save();
    return true;
  } catch (error) {
    return false;
  }
};

module.exports = { create_new_user, get_data_home_page, delete_user };
