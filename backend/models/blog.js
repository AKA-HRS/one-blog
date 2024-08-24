const { Schema, model } = require("mongoose");

const Blog = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },

    ref: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const newBlog = model("blog", Blog);
module.exports = newBlog;
