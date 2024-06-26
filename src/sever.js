require("dotenv").config();
const express = require("express"); // common js
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");
const connection = require("./config/database");
const app = express(); // app express
const port = process.env.PORT || 8888; // port
const hostname = process.env.HOST_NAME || "localhost";
app.use(express.urlencoded());
app.use(express.json());

configViewEngine(app);

app.use("/", webRoutes);
app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
