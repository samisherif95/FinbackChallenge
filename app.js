// Library Imports

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

// File Import
const posts = require("./routes/api/post");

// Setup
const app = express();
const PORT = process.env.PORT || 5000;

const db = require("./config/keys").mongoURI;
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to mongoDB"))
  .catch((err) => console.log(err));

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

// const updateLikes = (_id) => {
//   Post.findById(_id).then((post) => {
//     const likes = post.likes + 1;
//     post.set({ likes });
//     post.save();
//   });
// };

// Routes
app.use("/api/posts", posts);

// require("dotenv").config(); /// what is this?
//require("./server/routes")(app);

// app.get("*", (req, res) =>
//   res.status(200).send({
//     message: "Welcome",
//   })
// );

// module.exports = app;
