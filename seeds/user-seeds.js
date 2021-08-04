const { User } = require("../models");
const bcrypt = require("bcrypt");

const userData = [
  {
    username: "user1",
    email: "user1e@email.com",
    password: "password1",
  },
  {
    username: "user2",
    email: "user2@email.bet",
    password: "password2",
  },
];

const seedUsers = () => User.bulkCreate(userData);
console.log(User);
module.exports = seedUsers;
