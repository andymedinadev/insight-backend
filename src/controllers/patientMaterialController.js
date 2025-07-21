const PatientMaterial = require("../models/PatientMaterial");
const { sendResponse, sendError } = require("../utils/response");

const createMaterial = async (req, res) => {
  try {
    const { patientId } = req.params;

    const material = new PatientMaterial({
      ...req.body,
      patientId,
    });
    await material.save();

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
    const materials = await PatientMaterial.find();

    sendResponse({ res, data: materials });
  } catch (err) {
    sendError({ res, err });
  }
};

const getMaterialById = async (req, res) => {
  try {
    const material = await PatientMaterial.findById(req.params.materialId);

    sendResponse({ res, data: material });
  } catch (err) {
    sendError({ res, err });
  }
};

const updateMaterial = async (req, res) => {
  try {
    const material = await PatientMaterial.findByIdAndUpdate(
      req.params.materialId,
      req.body,
      { new: true }
    );

    sendResponse({ res, data: material });
  } catch (err) {
    sendError({ res, err });
  }
};

const deleteMaterial = async (req, res) => {
  try {
    await PatientMaterial.findByIdAndDelete(req.params.materialId);

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
