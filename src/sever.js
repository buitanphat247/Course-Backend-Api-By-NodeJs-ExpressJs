require("dotenv").config();
const express = require("express"); // common js
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");
const connection = require("./config/database");
const apiRouter = require("./routes/api");
const fileUpload = require("express-fileupload");
const { customer_collection } = require("./models/customer");

const app = express(); // app express
const port = process.env.PORT || 8888; // port
const hostname = process.env.HOST_NAME || "localhost";
app.use(fileUpload());
app.use(express.urlencoded());
app.use(express.json());
app.use("/", webRoutes);
app.use("/v1/api/", apiRouter);
configViewEngine(app);

(async () => {
  try {
    // test connection
    await connection();
    // new customer_collection({
    //   username: "buitanphat",
    //   address: "buitanphat",
    //   phone: "buitanphat",
    //   email: "buitanphat",
    //   image: null, // Adjust based on your file upload response structure
    //   description: "buitanphat",
    //   age: 12,
    // }).save();
    app.listen(port, hostname, () => {
      console.log(`Backend app listening on port ${port}`);
    });
  } catch (error) {
    console.log("error connect to db: ", error);
  }
})();
