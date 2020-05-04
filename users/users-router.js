const router = require("express").Router();
const Users = require("./users-model.js");

router.get("/", (req, res) => {
  Users.find()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((err) => res.sendStatus(err));
});

module.exports = router;