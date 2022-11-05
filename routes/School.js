const express = require("express");
const {
  createSchool,
  getSchool,
  searchSchool,
  getAllSchools,
  updateSchool,
  deleteSchool,
  loginSchool,
} = require("../controllers/schoolController");
const {
  authenticateUser,
  authorizePermissions,
  authenticateAdmin,
} = require("../middlewares/authentication");
const router = express.Router();

router.route("/").post(createSchool).get(getAllSchools);

router
  .route("/school/:school_id")
  .get(authenticateUser, getSchool)
  .put(authenticateUser, updateSchool)
  .delete(authenticateUser, deleteSchool);

router.route("/search").get(searchSchool);
router.route("/login").post(loginSchool);
module.exports = router;
