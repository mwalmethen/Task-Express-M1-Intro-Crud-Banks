const accounts = require("../../accounts");

exports.listAccountsController = (req, res) => {
  res.json(accounts);
};

// function for creating new account
const createNewAccount = (newAccountData) => {
  console.log("Creating a new account", newAccountData);
  const newId = accounts.length + 1;
  const newAccount = Object.assign({ id: newId }, newAccountData);
  console.log("My new account", newAccount);
  return newAccount;
};
exports.createNewAccountController = (req, res) => {
  const newAccount = createNewAccount(req.body);
  res.status(201).json(newAccount);
};

// function for deleting a account
const deleteAccount = (accountIdToBeDeleted) => {
  const newAccounts = accounts.filter(
    (account) => account.id != accountIdToBeDeleted
  );
  console.log("My new books are: ", newAccounts);
};
exports.deleteAccountController = (req, res) => {
  const { accountId } = req.params;
  const account = accounts.find((account) => account.id == accountId);
  if (account) {
    deleteAccount(accountId);
    res.status(204).end();
  } else {
    res.status(404).json();
  }
};

//function for updating account
const updateAccount = (currentAccount, newData) => {
  const myUpdatedAccount = Object.assign(currentAccount, newData);
  return myUpdatedAccount;
};
exports.updateAccountController = (req, res) => {
  const { accountId } = req.params;
  const account = accounts.find((account) => account.id == accountId); // we used == because we are entering a number

  if (account) {
    const updatedAccount = updateAccount(account, req.body);
    res.status(200).json(updatedAccount);
  } else {
    res.status(404).json();
  }
};

exports.accountByUsername = (req, res) => {
  const account = accounts.find(
    (account) =>
      account.username.toLocaleLowerCase() ===
      req.params.accountUsername.toLocaleLowerCase()
  ); // we used === because we are entering a string
  if (account) {
    res.status(200).json(account);
  } else {
    res.status(404).json();
  }
};
