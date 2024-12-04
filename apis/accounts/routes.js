const express = require("express");
const router = express.Router();

const accounts = require("../../accounts");
const {
  listAccountsController,
  createNewAccountController,
  deleteAccountController,
  updateAccountController,
  accountByUsername,
} = require("./controllers");

// getting all accounts
router.get("/", listAccountsController);

// creating a new account
router.post("/", createNewAccountController);

// deleting an account
router.delete("/:accountId", deleteAccountController);

// update an account
router.put("/:accountId", updateAccountController);

// get account by username
router.get("/:accountUsername", accountByUsername);

module.exports = router;
