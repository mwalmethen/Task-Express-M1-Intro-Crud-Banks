const express = require("express");

const app = express();

const accounts = require("./accounts");

app.use(express.json()); // solves req.body undefined!

app.get("/accounts", (req, res) => {
  res.json(accounts);
});

app.get("/", (req, res) => {
  res.send({ name: "Mohammed!" });
});

app.listen(8000, () => {
  console.log("Hello this is my first server :)");
});
