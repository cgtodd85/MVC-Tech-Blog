const { Post } = require("../../models");
const withAuth = require("../../utils/auth");
const router = require("express").Router();

//get posts not handled here, that is through homeroutes

// create post
router.post("/", withAuth, async (req, res) => {
  console.log(req.session);
  try {
    const newPost = await Post.create({
      user_id: req.session.user_id,
      post_title: req.body.post_title,
      blog_content: req.body.blog_content,
    });
    res.status(200).json(newPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

// update post
router.put("/:id", async (req, res) => {
  try {
    const updatedPost = await Post.update(
      {
        post_title: req.body.post_title,
        blog_content: req.body.blog_content,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json(updatedPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

// delete post
router.delete("/:id", async (req, res) => {
  try {
    const deletedPost = await Post.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(deletedPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
