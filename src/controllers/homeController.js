const connection = require("../config/database");

const getHomePage = (req, res) => {
  return res.render("home.ejs");
};
const getAbc = (req, res) => {
  res.send("Hello World! vs Bui Tan Phat learn backend in route abc");
};
const getBuiTanPhat = (req, res) => {
  res.render("sample.ejs");
};
module.exports = {
  getHomePage,
  getAbc,
  getBuiTanPhat,
};
