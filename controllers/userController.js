const { User } = require("../models");

module.exports = {
  getUser(req, res) {
    User.find()
      .then((user) => res.json(user))
      .catch((err) => {
        return res.status(500).json(err);
      });
  },
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .then((user) => res.json(user))
      .catch((err) => {
        res.status(500).json(err);
      });
  },
  createUser(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },

  updateUser(req, res) {
    User.findOneAndUpdate({ _id: req.params.userId }, req.body)
      .then((user) => res.json(user))
      .catch((err) => {
        res.status(500).json(err);
      });
  },

  deleteUser(req, res) {
    User.findOneAndDelete({ _id: req.params.userId })
      .then((user) => res.json(user))
      .catch((err) => {
        res.status(500).json(err);
      });
  },
};
