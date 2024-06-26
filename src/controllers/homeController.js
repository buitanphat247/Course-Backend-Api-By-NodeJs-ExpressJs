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
  const { name, email, city } = req.body;
  const query = "INSERT INTO Users (email, name, city) VALUES (?, ?, ?)";

  connection.query(query, [email, name, city], (err, result) => {
    if (err) {
      console.error("Error inserting user: ", err);
      return res.status(500).send("Error inserting user");
    }
    console.log("Insertion results: ", result);
    res.send("Create user successfully");
  });
};
module.exports = {
  getHomePage,
  getAbc,
  getBuiTanPhat,
  postCreateUser,
};
