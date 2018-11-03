const express = require("express");
const app = express();
const mongoose = require("mongoose");

// DB config
const db = require("./config/keys").mongoURI;

// Connect server to db
mongoose
  .connect(db)
  .then(() => console.log(`Connected to database`))
  .catch(err => console.log(err));

app.get("/", (req, res) => {
  res.send("Welcome to DevHive!");
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
