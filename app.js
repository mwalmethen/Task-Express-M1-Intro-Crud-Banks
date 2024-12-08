const express = require("express");
const app = express();
const accountRoutes = require("./apis/accounts/routes");
const connectDB = require("./database");
app.use(express.json()); // solves req.body undefined!
app.use("/api/accounts", accountRoutes);

connectDB();
app.listen(8000, () => {
  console.log("Hello this is my first server :)");
});
