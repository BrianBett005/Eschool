const { Router } = require("express");
const {
  createPost,
  getAllPosts,
  deletePost,
  updatePost,
  getAllMyPosts,
} = require("../controllers/postController");

const { authenticateAdmin } = require("../middlewares/authentication");
const router = Router();

router.route("/").post(authenticateAdmin, createPost).get(getAllPosts);
router.route("/my_posts").get(authenticateAdmin, getAllMyPosts);
router
  .route("/:post_id")
  .delete(authenticateAdmin, deletePost)
  .put(authenticateAdmin, updatePost);

module.exports = router;
