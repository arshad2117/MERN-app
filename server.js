const express = require("express");
const mongoose = require("mongoose");
const app = express();
const BodyParser = require("body-parser");
const users = require("./routes/api/user");
const posts = require("./routes/api/posts");
const profile = require("./routes/api/profile");

//body-parser middleware
app.use(BodyParser.urlencoded({ extended: false }));
app.use(BodyParser.json());

//DB config
const db = require("./config/keys").mongoURI;

mongoose
  .connect(db)
  .then(() => console.log("MONGO DB CONNECTED"))
  .catch(err => console.log(err));

const port = process.env.PORT || 5000;

app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);

app.listen(port, () => console.log(`Listening on port ${port}`));
