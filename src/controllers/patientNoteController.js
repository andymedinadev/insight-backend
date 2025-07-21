const PatientNote = require("../models/PatientNote");
const { sendResponse, sendError } = require("../utils/response");

const createNote = async (req, res) => {
  try {
    const { patientId } = req.params;

    const note = new PatientNote({
      ...req.body,
      patientId,
    });
    await note.save();

    sendResponse({
      res,
      data: note,
      status: 201,
      message: "Nota creada correctamente",
    });
  } catch (err) {
    sendError({ res, err, status: 400 });
  }
};

const getNotes = async (req, res) => {
  try {
    const notes = await PatientNote.find();

    sendResponse({ res, data: notes });
  } catch (err) {
    sendError({ res, err });
  }
};

const getNoteById = async (req, res) => {
  try {
    const note = await PatientNote.findById(req.params.noteId);

    sendResponse({ res, data: note });
  } catch (err) {
    sendError({ res, err });
  }
};

const updateNote = async (req, res) => {
  try {
    const note = await PatientNote.findByIdAndUpdate(
      req.params.noteId,
      req.body,
      { new: true }
    );

    sendResponse({ res, data: note });
  } catch (err) {
    sendError({ res, err });
  }
};

const deleteNote = async (req, res) => {
  try {
    await PatientNote.findByIdAndDelete(req.params.noteId);

    sendResponse({ res, message: "Nota eliminada correctamente" });
  } catch (err) {
    sendError({ res, err });
  }
};

module.exports = {
  createNote,
  getNotes,
  getNoteById,
  updateNote,
  deleteNote,
};
