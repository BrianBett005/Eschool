const express = require("express");
const {
  createSchool,
  getSchool,
  searchSchool,
  getAllSchools,
  updateSchool,
  deleteSchool,
  loginSchool,
  adminGetAllSchools,
} = require("../controllers/schoolController");
const {
  authenticateUser,
  authorizePermissions,
  authenticateAdmin,
} = require("../middlewares/authentication");
const router = express.Router();

router.route("/").post(createSchool).get(getAllSchools);
router
  .route("/all")
  .get([authenticateAdmin, authorizePermissions("admin")], adminGetAllSchools);

router.route("/school/:school_id").get(authenticateUser, getSchool);
router
  .route("/school")
  .put(authenticateUser, updateSchool)
  .delete(authenticateUser, deleteSchool);

router.route("/search").get(searchSchool);
router.route("/login").post(loginSchool);
module.exports = router;
