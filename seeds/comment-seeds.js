const { Comment } = require("../models");

const commentData = [
  {
    user_id: 1,
    post_id: 1,
    comment: "yep that's right",
    date_created: `${
      new Date().getMonth() + 1
    }/${new Date().getDate()}/${new Date().getFullYear()}`,
  },
  {
    user_id: 2,
    post_id: 1,
    comment: "idk",
    date_created: `${
      new Date().getMonth() + 1
    }/${new Date().getDate()}/${new Date().getFullYear()}`,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

console.log(Comment);

module.exports = seedComments;
