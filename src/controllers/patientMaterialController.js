const { sendResponse, sendError } = require("../utils/response");

const PatientMaterial = require("../models/PatientMaterial");
const Patient = require("../models/Patient");

const createMaterial = async (req, res) => {
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

    const materialId = patient.nextMaterialId;

    const material = new PatientMaterial({
      ...req.body,
      patientId,
      materialId,
    });
    await material.save();

    patient.nextMaterialId += 1;
    await patient.save();

    sendResponse({
      res,
      data: material,
      status: 201,
      message: "Material creado correctamente",
    });
  } catch (err) {
    sendError({ res, err, status: 400 });
  }
};

const getMaterials = async (req, res) => {
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

    const materials = await PatientMaterial.find({ patientId });

    sendResponse({ res, data: materials });
  } catch (err) {
    sendError({ res, err });
  }
};

const getMaterialById = async (req, res) => {
  try {
    const material = await PatientMaterial.findOne({
      patientId: req.params.patientId,
      materialId: req.params.materialId,
    });

    if (!material) {
      return sendError({
        res,
        status: 404,
        message: "Material no encontrado para este paciente.",
      });
    }

    sendResponse({ res, data: material });
  } catch (err) {
    sendError({ res, err });
  }
};

const updateMaterial = async (req, res) => {
  try {
    const material = await PatientMaterial.findOneAndUpdate(
      { patientId: req.params.patientId, materialId: req.params.materialId },
      req.body,
      { new: true, runValidators: true }
    );

    if (!material) {
      return sendError({
        res,
        status: 404,
        message: "Material no encontrado para este paciente.",
      });
    }

    sendResponse({ res, data: material });
  } catch (err) {
    sendError({ res, err });
  }
};

const deleteMaterial = async (req, res) => {
  try {
    const material = await PatientMaterial.findOneAndDelete({
      patientId: req.params.patientId,
      materialId: req.params.materialId,
    });

    if (!material) {
      return sendError({
        res,
        status: 404,
        message: "Material no encontrado para este paciente.",
      });
    }

    sendResponse({ res, message: "Material eliminado correctamente" });
  } catch (err) {
    sendError({ res, err });
  }
};

module.exports = {
  createMaterial,
  getMaterials,
  getMaterialById,
  updateMaterial,
  deleteMaterial,
};
