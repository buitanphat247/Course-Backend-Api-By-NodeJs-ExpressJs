const {
  create_new_user,
  get_data_home_page,
  delete_user,
  get_user_by_id,
  update_user_by_id,
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
  await create_new_user(req.body);
  res.redirect("/");
};
const postDeleteUser = async (req, res) => {
  const { id } = req.query;
  await delete_user(id);
  res.redirect("/");
};

const getInforUserById = async (req, res) => {
  const { id } = req.query;
  const results = await get_user_by_id(id);
  res.render("update.ejs", { data: results });
};
const updateUserById = async (req, res) => {
  const { id } = req.query;
  const results = await update_user_by_id(id, req.body);
  res.redirect("/");
};
module.exports = {
  getCreatePage,
  getHomePage,
  postCreateUser,
  postDeleteUser,
  getInforUserById,
  updateUserById,
};
