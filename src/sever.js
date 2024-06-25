const express = require("express"); // common js
const path = require("path");
require("dotenv").config();

// import express from "express // esmodules
// console.log("process.env.PORT: ", process.env.PORT);
// console.log("process.env.PORT: ", process.env.HOST_NAME);

const app = express(); // app express
const port = process.env.PORT || 8888; // port
const hostname = process.env.HOST_NAME || "localhost";
// config template engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// khai báo route
app.get("/", (req, res) => {
  res.send("Hello World! vs Bui Tan Phat learn backend");
});
app.get("/abc", (req, res) => {
  res.send("Hello World! vs Bui Tan Phat learn backend in route abc");
});
app.get("/buitanphat", (req, res) => {
  res.render("sample.ejs");
});

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
