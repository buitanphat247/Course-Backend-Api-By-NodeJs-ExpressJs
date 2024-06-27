const {
  create_new_user,
  get_data_home_page,
  delete_user,
} = require("../models/User");

const getHomePage = async (req, res) => {
  const results = await get_data_home_page();
  if (results === false) res.render("home.ejs", { data: [] });
  else res.render("home.ejs", { data: results });
};
const getCreatePage = (req, res) => {
  res.render("create.ejs");
};
const postCreateUser = async (req, res) => {
  const results = await create_new_user(req.body);
  if (results === true) res.redirect("/");
  else res.redirect("/create");
};
const postDeleteUser = async (req, res) => {
  const { id } = req.query;
  const results = await delete_user(id);
  res.redirect("/");
};
module.exports = { getCreatePage, getHomePage, postCreateUser, postDeleteUser };
