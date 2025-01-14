const express = require("express");
const dotenv = require("dotenv").config();
const colors = require("colors");
const port = process.env.PORT || 8000;

const app = express();

app.use("/", (req, res) => {
  res.send("Server is up and running");
});
app.listen(port, () => {
  console.log(`Server is listening on PORT: ${port}`.cyan.bold);
  console.log(`http://localhost:${port}`.red.bold.underline);
});
