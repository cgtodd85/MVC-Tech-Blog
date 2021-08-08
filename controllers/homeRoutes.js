const router = require("express").Router();
const { Post, User, Comment } = require("../models");
// const withAuth = require('../utils/auth');

router.get("/", async (req, res) => {
  try {
    // const allPosts = await Post.findAll();

    const allPosts = await Post.findAll({
      attributes: ["id", "user_id", "post_title", "blog_content"],
      include: [
        {
          model: User,
          as: "user",
        },
        // {
        //   model: Comment,
        //   as: "comment",
        // },
      ],
    });
    const posts = allPosts.map((post) => post.get({ plain: true }));
    // Pass serialized data and session flag into template
    console.log(posts);
    res.render("homepage", { posts });
  } catch (err) {
    res.status(500).json(err);
  }
});

// TODO test user model to see why getting eager loading error
/////////using below to test access to User model

router.get("/test", async (req, res) => {
  try {
    const allUsers = await User.findAll();
    const users = allUsers.map((user) => user.get({ plain: true }));
    console.log(users);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
