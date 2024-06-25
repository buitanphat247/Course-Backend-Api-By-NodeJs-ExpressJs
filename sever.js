const express = require("express");// common js
// import express from "express // esmodules
const app = express(); // app express
const port = 3000; // port

// khai báo route
app.get("/", (req, res) => { 
  res.send("Hello World! vs Bui Tan Phat learn backend");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
