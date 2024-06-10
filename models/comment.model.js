const mongoose = require("mongoose");

const commentSchema = mongoose.Schema(
  {
    comment_id: {
      type: String,
      require: true,
    },
    Report_id: {
      type: String,
      require: true,
    },
    User_id: {
      type: String,
      require: true,
    },
    content: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

const Comment = mongoose.model("Comment", commentSchema);
module.exports = Comment;
