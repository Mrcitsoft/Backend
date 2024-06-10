const express = require("express");
const router = express.Router();
const {
  getScams,
  getScam,
  createScam,
  updateScam,
  deletescam,
} = require("../controller/Scam.controller");

router.get("/", getScams);
router.get("/:id", getScam);
router.post("/", createScam);
router.put("/:id", updateScam);
router.delete("/:id", deletescam);

module.exports = router;
