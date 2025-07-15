const express = require("express");
const controller = require("../controllers/patientNoteController");

const router = express.Router({ mergeParams: true });

router.post("/", controller.createNote);
router.get("/", controller.getNotes);
router.get("/:noteId", controller.getNoteById);
router.put("/:noteId", controller.updateNote);
router.delete("/:noteId", controller.deleteNote);

module.exports = router;
