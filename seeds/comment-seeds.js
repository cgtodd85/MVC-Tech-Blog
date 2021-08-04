const { Comment } = require("../models");

const commentData = [
  {
    user_id: 1,
    post_id: 1,
    comment: "yep that's right",
  },
  {
    user_id: 2,
    post_id: 1,
    comment: "idk",
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

console.log(Comment);

module.exports = seedComments;
