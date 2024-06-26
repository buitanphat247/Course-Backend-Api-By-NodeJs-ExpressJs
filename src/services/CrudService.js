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
module.exports = { getAllUser };
