const { sendResponse, sendError } = require("../utils/response");

const PatientNote = require("../models/PatientNote");
const Patient = require("../models/Patient");

const createNote = async (req, res) => {
  try {
    const { patientId } = req.params;

    const patient = await Patient.findOne({ patientId });

    if (!patient) {
      return sendError({
        res,
        status: 404,
        message: "Paciente no encontrado.",
      });
    }

    const noteId = patient.nextNoteId;

    const note = new PatientNote({
      ...req.body,
      patientId,
      noteId,
    });

    await note.save();

    patient.nextNoteId += 1;
    await patient.save();

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
    const { patientId } = req.params;

    const patient = await Patient.findOne({ patientId });

    if (!patient) {
      return sendError({
        res,
        status: 404,
        message: "Paciente no encontrado.",
      });
    }

    const notes = await PatientNote.find({ patientId });

    sendResponse({ res, data: notes });
  } catch (err) {
    sendError({ res, err });
  }
};

const getNoteById = async (req, res) => {
  try {
    const note = await PatientNote.findOne({
      patientId: req.params.patientId,
      noteId: req.params.noteId,
    });

    if (!note) {
      return sendError({
        res,
        status: 404,
        message: "Nota no encontrada para este paciente.",
      });
    }

    sendResponse({ res, data: note });
  } catch (err) {
    sendError({ res, err });
  }
};

const updateNote = async (req, res) => {
  try {
    const note = await PatientNote.findOneAndUpdate(
      { patientId: req.params.patientId, noteId: req.params.noteId },
      req.body,
      { new: true, runValidators: true }
    );

    if (!note) {
      return sendError({
        res,
        status: 404,
        message: "Nota no encontrada para este paciente.",
      });
    }

    sendResponse({ res, data: note });
  } catch (err) {
    sendError({ res, err });
  }
};

const deleteNote = async (req, res) => {
  try {
    const note = await PatientNote.findOneAndDelete({
      patientId: req.params.patientId,
      noteId: req.params.noteId,
    });

    if (!note) {
      return sendError({
        res,
        status: 404,
        message: "Nota no encontrada para este paciente.",
      });
    }

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
