const { Router } = require("express");
const {
  createEvent,
  getASchoolEvents,
  deleteEvent,
  updateEvent,
} = require("../controllers/eventController");

const { authenticateUser } = require("../middlewares/authentication");
const router = Router();

router.route("/").post(authenticateUser, createEvent);
router.route("/school/:school_id").get(getASchoolEvents);
router
  .route("/:event_id")
  .delete(authenticateUser, deleteEvent)
  .put(authenticateUser, updateEvent);

module.exports = router;
