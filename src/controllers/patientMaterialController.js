const PatientMaterial = require("../models/PatientMaterial");

const createMaterial = async (req, res) => {
  try {
    const { pacienteId } = req.params;
    const material = new PatientMaterial({
      ...req.body,
      patientId: pacienteId,
    });
    await material.save();
    res.status(201).json(material);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getMaterials = async (req, res) => {
  try {
    const materials = await PatientMaterial.find();
    res.json(materials);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getMaterialById = async (req, res) => {
  try {
    const material = await PatientMaterial.findById(req.params.materialId);
    res.json(material);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateMaterial = async (req, res) => {
  try {
    const material = await PatientMaterial.findByIdAndUpdate(
      req.params.materialId,
      req.body,
      { new: true }
    );
    res.json(material);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteMaterial = async (req, res) => {
  try {
    await PatientMaterial.findByIdAndDelete(req.params.materialId);
    res.json({ message: "Material eliminado correctamente" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createMaterial,
  getMaterials,
  getMaterialById,
  updateMaterial,
  deleteMaterial,
};
