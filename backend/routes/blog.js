const express = require("express");
const router = express.Router();

const { handelCreateBlog, handelgetAllBlogs,handelgetAllBlogsbygroup } = require("../controllers/blog");
router.post("/create", handelCreateBlog);
router.get("/getpost", handelgetAllBlogs);
router.get("/getpostbygroup", handelgetAllBlogsbygroup);

module.exports = router;
