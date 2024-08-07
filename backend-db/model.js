const { Password } = require("@mui/icons-material");
const mongoose = require("mongoose");

let Signup = new mongoose.Schema({
  frirstName: {
    type: String,
    require: true,
  },
  lastName: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  Password: {
    type: String,
    require: true,
  },
  confirmPassword: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("Signup", Signup);
