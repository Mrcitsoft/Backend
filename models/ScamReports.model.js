const mongoose = require("mongoose");
const validator = require("validator");

const ScamSchema = mongoose.Schema(
  {
    Report_id: {
      type: String,
      require: true,
    },
    User_id: {
      type: String,
      require: true,
    },
    Description: {
      type: String,
      require: true,
    },
    Url: {
      type: String,
      require: true,
      validate: {
        validator: (value) =>
          validator.isURL(value, {
            protocols: ["http", "https", "ftp"],
            require_tld: true,
            require_protocol: true,
          }),
        message: "Must be a Valid URL",
      },
    },
    Anonymous: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
  }
);

const Scam = mongoose.model("Scam", ScamSchema);
module.exports = Scam;
