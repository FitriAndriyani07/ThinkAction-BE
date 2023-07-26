const express = require("express");
const router = express.Router();
const posts = require('./posts');
const users = require('./users');

router.get("/", (req, res) => {
  res.status(200).json({
    status:true,
    message: "Welcome to Think App API",
  })
});

router.use("/posts", posts);
router.use("/users", users);

module.exports = router;