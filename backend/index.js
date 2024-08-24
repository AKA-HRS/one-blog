const express = require("express");
const cors = require("cors");
const blog = require("./routes/blog");
const { connectToMongo } = require("./connection");
require("dotenv").config();
const app = express();
app.use(express.json());

app.use(
  cors({
    credentials: true,
    methods: ["GET", "DELETE", "PATCH", "PUT", "POST"],
    origin: ["http://localhost:5173"],
  })
);
connectToMongo();
app.use("/blog", blog);

app.listen(3000, () => {
  console.log(`server listening at port  3000`);
});
