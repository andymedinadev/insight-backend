const PatientNote = require("../models/PatientNote");

const createNote = async (req, res) => {
  try {
    const { patientId } = req.params;
    const note = new PatientNote({
      ...req.body,
      patientId,
    });
    await note.save();
    res.status(201).json(note);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getNotes = async (req, res) => {
  try {
    const notes = await PatientNote.find();
    res.json(notes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getNoteById = async (req, res) => {
  try {
    const note = await PatientNote.findById(req.params.noteId);
    res.json(note);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateNote = async (req, res) => {
  try {
    const note = await PatientNote.findByIdAndUpdate(
      req.params.noteId,
      req.body,
      { new: true }
    );
    res.json(note);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteNote = async (req, res) => {
  try {
    await PatientNote.findByIdAndDelete(req.params.noteId);
    res.json({ message: "Nota eliminada correctamente" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createNote,
  getNotes,
  getNoteById,
  updateNote,
  deleteNote,
};
