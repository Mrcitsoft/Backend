const { timestamps } = require("bson");
const mongoose = require("mongoose");
const { type } = require("os");

const UserSchema = mongoose.Schema(
  {
    User_id: {
      type: String,
      require: false,
    },
    Username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      require: true,
    },
    Password: {
      type: String,
      require: true,
    },
    admin: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);


const user=mongoose.model("user", UserSchema);


module.exports=user;