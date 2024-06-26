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
const getCreateUserPage = (req, res) => {
  res.render("create.ejs");
};
const postCreateUser = async (req, res) => {
  const { name, email, city } = req.body;
  const query = "INSERT INTO Users (email, name, city) VALUES (?, ?, ?)";
  try {
    const [results, fields] = await connection.query(query, [
      email,
      name,
      city,
    ]);
    console.log(results);
    res.send("Create user successfully");
  } catch (error) {
    res.send(error);
    console.error(error);
  }
};
module.exports = {
  getHomePage,
  getAbc,
  getBuiTanPhat,
  postCreateUser,
  getCreateUserPage,
};
