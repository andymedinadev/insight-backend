const Patient = require("../models/Patient");

const createPatient = async (req, res) => {
  try {
    const patient = new Patient(req.body);
    await patient.save();
    res.status(201).json(patient);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getPatients = async (req, res) => {
  try {
    const patients = await Patient.find().populate("userId");
    res.json(patients);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getPatientById = async (req, res) => {
  try {
    const patient = await Patient.findById(req.params.id).populate("userId");
    if (!patient)
      return res.status(404).json({ error: "Paciente no encontrado" });
    res.json(patient);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updatePatient = async (req, res) => {
  try {
    const patient = await Patient.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!patient)
      return res.status(404).json({ error: "Paciente no encontrado" });
    res.json(patient);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const deletePatient = async (req, res) => {
  try {
    const patient = await Patient.findByIdAndDelete(req.params.id);
    if (!patient)
      return res.status(404).json({ error: "Paciente no encontrado" });
    res.json({ message: "Paciente eliminado" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createPatient,
  getPatients,
  getPatientById,
  updatePatient,
  deletePatient,
};
