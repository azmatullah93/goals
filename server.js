const express = require("express");
const app = express();
const goalRoutes = require("./routes/goalRoutes");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.status(200).send("Hello world");
  console.log("Hello world");
});

app.use("/api/goals", goalRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
