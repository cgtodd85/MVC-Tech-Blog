const { User } = require("../../models");
const router = require("express").Router();

// get all users
router.get("/", async (req, res) => {
  try {
    const allUsers = await User.findAll();
    const userData = allUsers.map((user) => user.get({ plain: true }));
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Create a new user
router.post("/", async (req, res) => {
  try {
    const dbUserData = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.user_id = dbUserData.id;
      req.session.username = dbUserData.username;
      res.status(200).json(dbUserData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// --- LOGIN --- //
router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({
      where: { username: req.body.username },
    });
    if (!userData) {
      res.status(400).json({ message: "Login failed. Please try again!" });
      return;
    }
    const validPassword = await userData.checkPassword(req.body.password);
    if (!validPassword) {
      res.status(400).json({ message: "Login failed. Please try again!" });
      return;
    }
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.loggedIn = true;
      res
        .status(200)
        .json({ user: userData, message: "You are now logged in! Blog away!" });
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// --- LOGOUT --- //
router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

router.put("/:id", async (req, res) => {
  try {
    // hooks created in user model will take data being passed into update and make it lower case first
    const updatedUserData = await User.update(req.body, {
      where: { id: req.params.id },
      individualHooks: true,
    });
    res.status(200).json(updatedUserData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
