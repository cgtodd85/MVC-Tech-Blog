const router = require("express").Router();
const { Post, User, Comment } = require("../models");
// const withAuth = require('../utils/auth');

// Get all posts and join with user data
router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [{ model: User, attributes: ["username"] }, { model: Comment }],
    });

    // Serialize data so the template can read it
    const posts = postData.map((post) => post.get({ plain: true }));
    console.log(posts);
    // Pass serialized data and session flag into template
    res.render("homepage", { posts, loggedIn: req.session.loggedIn });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/post/:id", async (req, res) => {
  try {
    const singlePost = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
        },
        {
          model: Comment,
          include: {
            model: User,
            attributes: ["username"],
          },
        },
      ],
    });
    const post = singlePost.get({ plain: true });
    console.log(post);
    res.render("single-post", { post, loggedIn: req.session.loggedIn });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
