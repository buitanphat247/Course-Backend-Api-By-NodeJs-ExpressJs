require("dotenv").config();
const express = require("express"); // common js
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");
const connection = require("./config/database");
const Kitten = require("./models/Kitten");


const app = express(); // app express
const port = process.env.PORT || 8888; // port
const hostname = process.env.HOST_NAME || "localhost";
app.use(express.urlencoded());
app.use(express.json());
app.use("/", webRoutes);
configViewEngine(app);



(async () => {
  try {
    // test connection
    await connection();
    app.listen(port, hostname, () => {
      console.log(`Backend app listening on port ${port}`);
    });
  } catch (error) {
    console.log("error connect to db: ", error);
  }
})();
