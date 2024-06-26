const connection = require("../config/database");
const bodyParser = require("body-parser");

const getHomePage = (req, res) => {
  return res.render("home.ejs");
};
const getAbc = (req, res) => {
  res.send("Hello World! vs Bui Tan Phat learn backend in route abc");
};
const getBuiTanPhat = (req, res) => {
  res.render("sample.ejs");
};
const postCreateUser = (req, res) => {
  console.log("req name: ", req.body.name);
  console.log("req email: ", req.body.email);
  console.log("req city: ", req.body.city);
  console.log("req.body: ", req.body);
  res.send("create user successfully");
};
module.exports = {
  getHomePage,
  getAbc,
  getBuiTanPhat,
  postCreateUser,
};
