const express = require("express");
const patientNoteController = require("../controllers/patientNoteController");

const router = express.Router({ mergeParams: true });

router.post("/", patientNoteController.createNote);
router.get("/", patientNoteController.getNotes);
router.get("/:noteId", patientNoteController.getNoteById);
router.put("/:noteId", patientNoteController.updateNote);
router.delete("/:noteId", patientNoteController.deleteNote);

module.exports = router;
