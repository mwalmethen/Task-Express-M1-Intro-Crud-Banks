const { model, Schema } = require("mongoose");

const AccountSchema = new Schema({
  username: {
    type: String, // type of the object
    required: true, // return true but username is required you cant create an account without username
    default: null, // makes the value null
  },
  funds: {
    type: Number, // type of object
    default: 0, // default value should be zero
  },
});

module.exports = model("Account", AccountSchema);
