const { Post } = require("../models");

const postData = [
  {
    user_id: 1,
    post_title: "post one",
    blog_content: `This is the content of postone!! lolol`,
    date_created: `${
      new Date().getMonth() + 1
    }/${new Date().getDate()}/${new Date().getFullYear()}`,
  },
  {
    user_id: 2,
    post_title: "post 2",
    blog_content: `post 2 post 2 testing`,
    date_created: `${
      new Date().getMonth() + 1
    }/${new Date().getDate()}/${new Date().getFullYear()}`,
  },
];

const seedPosts = () => Post.bulkCreate(postData);
console.log(Post);
module.exports = seedPosts;
