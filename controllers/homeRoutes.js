const router = require("express").Router();
const { Post, User } = require("../models");
// const withAuth = require('../utils/auth');

router.get("/", async (req, res) => {
  try {
    const allPosts = await Post.findAll();

    // const allPosts = await Post.findAll({
    //   include: [
    //     {
    //       model: User,
    //       as: "post_author",
    //       attributes: ["username"],
    //     },
    //   ],
    // });
    const posts = allPosts.map((post) => post.get({ plain: true }));
    // Pass serialized data and session flag into template
    console.log(posts);
    res.render("homepage", { posts });
  } catch (err) {
    res.status(500).json(err);
  }
});

/////////using below to test access to User model

module.exports = router;
