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
    await user_collection.findOneAndDelete({ _id: id });
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
    const saved_user = await new_user.save();
    return saved_user;
  } catch (error) {
    return false;
  }
};
const get_user_by_id = async (id) => {
  try {
    const results = await user_collection.findOne({ _id: id });
    return results;
  } catch (error) {
    console.log(error);
  }
};
const update_user_by_id = async (id, data) => {
  try {
    const results = await user_collection.findByIdAndUpdate(
      { _id: id },
      {
        $set: {
          username: data.username,
          email: data.email,
          phoneNumber: data.phone,
          age: data.age,
        },
      }
    );
    return results;
  } catch (error) {}
};
module.exports = {
  create_new_user,
  get_data_home_page,
  delete_user,
  get_user_by_id,
  update_user_by_id,
};
