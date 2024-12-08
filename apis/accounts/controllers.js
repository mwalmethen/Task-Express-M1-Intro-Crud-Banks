const Account = require("../../models/Account");

// getting all users
exports.listAccountsController = async (req, res) => {
  try {
    const accounts = await Account.find({}, "-createdAt -updatedAt");
    res.json(accounts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// creating a new account
exports.createNewAccountController = async (req, res) => {
  try {
    const newAccount = await Account.create(req.body);
    res.status(201).json(Account);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// deleting an account
exports.deleteAccountController = async (req, res) => {
  const { accountId } = req.params;
  try {
    const foundAccount = await Account.findById(accountId);
    if (foundAccount) {
      await foundAccount.deleteOne();
      res.status(204).end();
    } else {
      res.status(404).json({ message: "Account not found" });
    }
  } catch (err) {
    res.status(500).json({ message: error.message });
  }
};

// updating account
exports.updateAccountController = async (req, res) => {
  const { accountId } = req.params;
  try {
    const foundAccount = await Account.findById(accountId);
    if (foundAccount) {
      await foundAccount.updateOne(req.body);
      res.status(204).end();
    } else {
      res.status(404).json({ message: "Account not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
