const router = require("express").Router();
const withAuth = require("../../utils/auth");
const userRoutes = require("./userRoutes");
const postRoutes = require("./postRoutes");
const commentRoutes = require("./commentRoutes");

router.use(withAuth);
router.use("/users", userRoutes);
// router.use("/post", postRoutes);
// router.use("/comment", commentRoutes);

module.exports = router;
