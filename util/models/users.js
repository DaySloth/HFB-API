const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  first_name: { type: String, trim: true },
  last_name: { type: String, trim: true },
  email: { type: String, trim: true },
  isTempPassword: Boolean,
  hasWebAccess: Boolean,
  password: { type: String, trim: true },
  date_Updated: { type: Date, default: Date.now },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
