const mongoose = require("mongoose");
const { role } = require("../../api/enums/userEnums");

const userSchema = new mongoose.Schema({
  fullName: { type: String },
  username: { type: String, unique: true },
  email: { type: String, unique: true },
  phone: { type: String },
  password: { type: String },
  role: { type: Number, enum: [role.admin, role.user] },
});

const UserSchema = mongoose.model("User", userSchema);
module.exports = { UserSchema };
