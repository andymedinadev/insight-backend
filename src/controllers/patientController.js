const Patient = require("../models/Patient");
const { sendResponse, sendError } = require("../utils/response");

const createPatient = async (req, res) => {
  try {
    const patient = new Patient(req.body);
    await patient.save();

    sendResponse({
      res,
      data: patient,
      status: 201,
      message: "Paciente creado correctamente",
    });
  } catch (err) {
    sendError({ res, err, status: 400 });
  }
};

const getPatients = async (req, res) => {
  try {
    const patients = await Patient.find().populate("userId");

    sendResponse({ res, data: patients });
  } catch (err) {
    sendError({ res, err });
  }
};

const getPatientById = async (req, res) => {
  try {
    const patient = await Patient.findById(req.params.id).populate("userId");

    if (!patient) {
      return sendError({
        res,
        message: "Paciente no encontrado",
        status: 404,
      });
    }
    sendResponse({ res, data: patient });
  } catch (err) {
    sendError({ res, err });
  }
};

const updatePatient = async (req, res) => {
  try {
    const patient = await Patient.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!patient) {
      return sendError({ res, status: 404, message: "Paciente no encontrado" });
    }

    sendResponse({ res, data: patient });
  } catch (err) {
    sendError({ res, err, status: 400 });
  }
};

const deletePatient = async (req, res) => {
  try {
    const patient = await Patient.findByIdAndDelete(req.params.id);

    if (!patient) {
      return sendError({ res, message: "Paciente no encontrado", status: 404 });
    }

    sendResponse({ res, message: "Paciente eliminado" });
  } catch (err) {
    sendError({ res, err });
  }
};

module.exports = {
  createPatient,
  getPatients,
  getPatientById,
  updatePatient,
  deletePatient,
};
