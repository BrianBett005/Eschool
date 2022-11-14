const { Router } = require("express");
const { initializePayStack } = require("../controllers/payStackController");
const router = Router();

router.route("/init").post(initializePayStack);

module.exports = router;
