const router = require("express").Router();
const {
  getUser,
  createUser,
  getSingleUser,
  updateUser,
  deleteUser,
  createUserFriend,
  deleteUserFriend,
} = require("../../controllers/userController");
router.route("/").get(getUser).post(createUser);

router.route("/:userId").get(getSingleUser).put(updateUser).delete(deleteUser);

router
  .route("/:userId/friends/:friendId")
  .post(createUserFriend)
  .delete(deleteUserFriend);

module.exports = router;
