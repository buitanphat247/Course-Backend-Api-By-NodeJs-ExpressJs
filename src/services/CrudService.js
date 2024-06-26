const connection = require("../config/database");

const getAllUser = async () => {
  const query = "SELECT * FROM Users";
  try {
    const [results, fields] = await connection.query(query);
    return results;
  } catch (error) {
    return error.message;
  }
};
const createNewUser = async (req, res) => {
  const { name, email, city } = req.body;
  const query = "INSERT INTO Users (email, name, city) VALUES (?, ?, ?)";
  try {
    const [results, fields] = await connection.query(query, [
      email,
      name,
      city,
    ]);
    return results;
  } catch (error) {
    res.send(error);
    console.error(error);
  }
};
const deleteUserById = async (userId) => {
  const query = `DELETE FROM Users WHERE id=${userId}`;
  const [results, fields] = await connection.query(query);
  console.log(results);
};

const loadInforUserById = async (userId) => {
  const query = `Select * from Users where id=${userId}`;
  const [results, fields] = await connection.query(query);
  return results;
};
const handleUpdateUserById = async (req, res) => {
  const userId = req.query.id;
  const { name, email, city } = req.body;
  const query = "UPDATE  Users SET  email= ?, name=?, city = ? WHERE id= ?";
  const [results, fields] = await connection.query(query, [
    email,
    name,
    city,
    userId,
  ]);
  return results;
};
module.exports = {
  getAllUser,
  createNewUser,
  deleteUserById,
  loadInforUserById,
  handleUpdateUserById,
};
