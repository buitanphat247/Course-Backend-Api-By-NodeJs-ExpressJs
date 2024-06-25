const express = require("express"); // common js
const path = require("path");
// import express from "express // esmodules
const app = express(); // app express
const port = 3000; // port

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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
