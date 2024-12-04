const express = require("express");
const accounts = require("./accounts");
const app = express();

app.use(express.json()); // solves req.body undefined!

// function for creating new account
const createNewAccount = (newAccountData) => {
  console.log("Creating a new account", newAccountData);
  const newId = accounts.length + 1;
  const newAccount = Object.assign({ id: newId }, newAccountData);
  console.log("My new account", newAccount);
  return newAccount;
};
// function for deleting a account
const deleteAccount = (accountIdToBeDeleted) => {
  const newAccounts = accounts.filter(
    (account) => account.id != accountIdToBeDeleted
  );
  console.log("My new books are: ", newAccounts);
};

//function for updating account
const updateAccount = (currentAccount, newData) => {
  const myUpdatedAccount = Object.assign(currentAccount, newData);
  return myUpdatedAccount;
};

// getting all accounts
app.get("/accounts", (req, res) => {
  res.json(accounts);
});
// getting my name
app.get("/", (req, res) => {
  res.send({ name: "Mohammed!" });
});

// creating a new account
app.post("/accounts", (req, res) => {
  const newAccount = createNewAccount(req.body);
  res.status(201).json(newAccount);
});

// deleting an account
app.delete("/accounts/:accountId", (req, res) => {
  const { accountId } = req.params;
  const account = accounts.find((account) => account.id == accountId);
  if (account) {
    deleteAccount(accountId);
    res.status(204).end();
  } else {
    res.status(404).json();
  }
});

// update an account
app.put("/accounts/:accountId", (req, res) => {
  const { accountId } = req.params;
  const account = accounts.find((account) => account.id == accountId);

  if (account) {
    const updatedAccount = updateAccount(account, req.body);
    res.status(200).json(updatedAccount);
  } else {
    res.status(404).json();
  }
});

// get account by username
app.get("/accounts/:accountUsername", (req, res) => {
  const { accountUsername } = req.params;
  const account = accounts.find(
    (account) => account.username === accountUsername
  );
  if (account) {
    res.status(200).json(account);
  } else {
    res.status(404).json();
  }
});
app.listen(8000, () => {
  console.log("Hello this is my first server :)");
});
