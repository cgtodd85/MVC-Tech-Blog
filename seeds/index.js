const sequelize = require("../config/connection.js");
const seedUsers = require("./user-seeds.js");
const seedPosts = require("./post-seeds.js");
const seedComments = require("./comment-seeds");

const seed = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();
  console.log("----- USERS SEEDED -----");

  await seedPosts();
  console.log("----- POSTS SEEDED -----");

  await seedComments();
  console.log("----- COMMENTS SEEDED -----");

  process.exit(0);
};

seed();
