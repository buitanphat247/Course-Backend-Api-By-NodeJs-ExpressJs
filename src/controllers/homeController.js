const connection = require("../config/database");

const getHomePage = (req, res) => {
  let users = [];
  connection.query("select * from Users u", function (err, results, fields) {
    users = results;
    res.send(JSON.stringify(users));
  });
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
