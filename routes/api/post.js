const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Post = require("../../models/Post");
const validatePostInput = require("../../validation/posts");

router.get("/", (req, res) => {
  Post.find()
    .sort({ date: -1 })
    .then((posts) => res.json(posts))
    .catch((err) => res.status(404).json({ notpostsfound: "No posts found" }));
});

router.post("/", (req, res) => {
  const { errors, isValid } = validatePostInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const newPost = new Post({
    text: req.body.text,
  });

  newPost.save().then((post) => res.json(post));
});

router.put("/:_id", (req, res) => {
  console.log(req.params._id);
  let post = Post.findOne({ _id: req.params._id }).then((post) => {
    post.likes += 1;
    console.log(post);
    post.save();
    res.json(post);
  });
});

router.delete("/:_id", (req, res) => {
  var id = req.params._id;
  Post.findOneAndDelete({
    _id: id},
    function(err, post) {
      if (err) res.send(err);
      res.json(post);
    }
    );
});

module.exports = router;
