const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    first_name: { type: String, trim: true },
    last_name: { type: String, trim: true },
    email: { type: String, trim: true },
    phone_number: { type: String, trim: true },
    isTempPassword: Boolean,
    hasWebAccess: Boolean,
    password: { type: String, trim: true },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
