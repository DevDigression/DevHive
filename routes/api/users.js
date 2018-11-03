const express = require("express");
const router = express.Router();
const gravatar = require("gravatar");

const User = require("../../models/User");

// @route   GET /api/users/test
// @desc    Tests users route
// @access  Public
router.get("/test", (req, res) => {
  res.json({ message: "Users tested successfully!" });
});

// @route   GET /api/users/register
// @desc    Register user
// @access  Public

router.post("/register", (req, res) => {
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({
        email: "A user has already been registered with that email address"
      });
    } else {
      // Create user avatar with gravatar
      const avatar = gravatar.url(req.body.email, {
        s: "200", // size
        r: "pg", // rating
        d: "retro" // default
      });

      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        avatar: avatar,
        password: req.body.password
      });
    }
  });
});

module.exports = router;
