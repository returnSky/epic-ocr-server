require("dotenv").config();
// const { BAIDU_API_PARAMS } = require("#root/configs/index.js");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const cookieSession = require("cookie-session");

const app = express();
const port = process.env.PORT || 3000;

// adding Helmet to enhance your API's security
app.use(helmet());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Configuring cors middleware
app.use(cors());

// Configuring session
app.use(
  cookieSession({
    name: "session",
    secret: "test",
    // Cookie Options
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
  })
);

app.get("/hello", function (req, res) {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`server is running at ${port}`);
});
