const express = require("express");
const accounts = require("./accounts");
const app = express();
const accountRoutes = require("./apis/accounts/routes");
app.use(express.json()); // solves req.body undefined!
app.use("/api/accounts", accountRoutes);

app.listen(8000, () => {
  console.log("Hello this is my first server :)");
});
