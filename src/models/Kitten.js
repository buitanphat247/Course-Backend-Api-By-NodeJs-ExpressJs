const mongoose = require("mongoose");

// định nghĩa cấu trúc dữ liệu
const kittySchema = new mongoose.Schema({
  name: String,
});
// tạo 1 cái model trong database với tên là DB_NAME trong file .env
// desc: tạo ra 1 cái table với tên là kitten với định dạng dữ liệu là kittySchema
const Kitten = mongoose.model("Kitten", kittySchema);

module.exports = Kitten;

// // create data
// const cat = new Kitten({ name: "buitanphat" });
// // save data
// cat.save();
