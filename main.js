require("dotenv").config();
// const { BAIDU_API_PARAMS } = require("#root/configs/index.js");
const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;
app.use(cors());

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`server is running at ${port}`);
});
