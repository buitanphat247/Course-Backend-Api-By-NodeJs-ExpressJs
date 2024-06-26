require("dotenv").config();
const express = require("express"); // common js
const mysql = require("mysql2");
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");
const app = express(); // app express
const port = process.env.PORT || 8888; // port
const hostname = process.env.HOST_NAME || "localhost";

configViewEngine(app);

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  port: process.env.DB_PORT,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

connection.query("select * from Users ", function (err, results, fields) {
  console.log(results);
});
// khai báo route
app.use("/", webRoutes);

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
