const { Router } = require("express");
const {
  createComment,
  getAPostComments,
} = require("../controllers/commentController");
const router = Router();
router.route("/:postId").get(getAPostComments);
router.route("/").post(createComment);
module.exports = router;
