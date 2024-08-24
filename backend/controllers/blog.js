const Blog = require("../models/blog");

const handelCreateBlog = async (req, res) => {
  try {
    const { author, title, content, category, ref } = req.body;

    const newBlog = new Blog({
      author,
      title,
      content,
      ref,
      category,
    });

    await newBlog.save();
    console.log(newBlog._id);

    res.status(201).json({ message: "Blog created successfully" });
  } catch (error) {
    console.error("Error saving blog:", error);
    res.status(500).json({ message: "Server error" });
  }
};

const handelgetAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (error) {
    console.error("Error getting all blogs:", error.message);
    res.status(500).send("Error getting all blogs.");
  }
};

const handelgetAllBlogsbygroup = async (req, res) => {
  try {
    const groupby = req.query.groupby;
    const pipeline = [
      {
        $group: {
          _id: `$${groupby}`,
          count: { $sum: 1 },
          blogs: {
            $push: {
              title: "$title",
              author: "$author",
              content: "$content",
              intro: "$intro",
              points: "$points",
              category: "$category",
              ref: "$ref",
              createdAt: "$createdAt",
            },
          },
        },
      },
      {
        $sort: { count: -1 },
      },
    ];
    const blogsByGroup = await Blog.aggregate(pipeline);
    res.status(200).json(blogsByGroup);
  } catch (error) {
    console.error("Error getting blogs by group:", error.message);
    res.status(500).send("Error getting blogs by group.");
  }
};

module.exports = {
  handelCreateBlog,
  handelgetAllBlogsbygroup,
  handelgetAllBlogs,
};
