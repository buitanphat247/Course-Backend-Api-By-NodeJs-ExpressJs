const connection = require("../config/database");
const bodyParser = require("body-parser");
const {
  getAllUser,
  createNewUser,
  deleteUserById,
  loadInforUserById,
  handleUpdateUserById,
} = require("../services/CrudService");

const getHomePage = async (req, res) => {
  try {
    const results = await getAllUser();
    return res.render("home.ejs", { listUser: results });
  } catch (error) {
    console.error(error);
  }
};

const CreateUserPage = (req, res) => {
  res.render("create.ejs");
};
const postCreateUser = async (req, res) => {
  try {
    const results = await createNewUser(req, res);
    console.log("results: ", results);
    res.redirect("/");
  } catch (error) {
    console.error(error);
  }
};
const postDeleteUser = async (req, res) => {
  try {
    // const results = await deleteUser(req, res);
    const userId = req.query.id;
    const results = await deleteUserById(userId);
    console.log("results: ", results);
    res.redirect("/");
  } catch (error) {
    console.error(error);
  }
};

const getInforUser = async (req, res) => {
  try {
    // const results = await deleteUser(req, res);
    const userId = req.query.id;
    const results = await loadInforUserById(userId);
    console.log("results: ", results);
    return res.render("update.ejs", { inforUser: results });
  } catch (error) {
    console.error(error);
  }
};
const postHandleUpdateUser = async (req, res) => {
  try {
    // const [results,fields]=await connection.query()
    const results = await handleUpdateUserById(req, res);
    console.log(results);
    res.redirect("/");
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  getHomePage,
  postCreateUser,
  CreateUserPage,
  postDeleteUser,
  getInforUser,
  postHandleUpdateUser,
};
