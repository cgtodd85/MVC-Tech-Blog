const { Comment } = require("../../models");
const withAuth = require("../../utils/auth");
const router = require("express").Router();

// create comment
router.post("/", withAuth, async (req, res) => {
  console.log(req.session);
  try {
    const newComment = await Comment.create({
      user_id: req.session.user_id,
      post_id: req.body.post_id,
      comment: req.body.comment,
    });
    res.status(200).json(newComment);
  } catch (err) {
    res.status(500).json(err);
  }
});

// update comment

// delete comment

module.exports = router;
