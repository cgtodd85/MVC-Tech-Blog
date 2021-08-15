const router = require("express").Router();
const withAuth = require("../../utils/auth");
const userRoutes = require("./userRoutes");

router.use(withAuth);
router.use("/users", userRoutes);
router.use("/post", postRoutes);

module.exports = router;
