const router = require("express").Router();
const {
  getUser,
  createUser,
  getSingleUser,
  updateUser,
  deleteUser,
} = require("../../controllers/userController");
router.route("/").get(getUser).post(createUser);

router.route("/:userId").get(getSingleUser).put(updateUser).delete(deleteUser);

module.exports = router;
