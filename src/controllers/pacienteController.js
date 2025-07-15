const Paciente = require("../models/Paciente");

const createPaciente = async (req, res) => {
  try {
    const paciente = new Paciente(req.body);
    await paciente.save();
    res.status(201).json(paciente);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getPacientes = async (req, res) => {
  try {
    const pacientes = await Paciente.find().populate("userId");
    res.json(pacientes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getPacienteById = async (req, res) => {
  try {
    const paciente = await Paciente.findById(req.params.id).populate("userId");
    if (!paciente)
      return res.status(404).json({ error: "Paciente no encontrado" });
    res.json(paciente);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updatePaciente = async (req, res) => {
  try {
    const paciente = await Paciente.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!paciente)
      return res.status(404).json({ error: "Paciente no encontrado" });
    res.json(paciente);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const deletePaciente = async (req, res) => {
  try {
    const paciente = await Paciente.findByIdAndDelete(req.params.id);
    if (!paciente)
      return res.status(404).json({ error: "Paciente no encontrado" });
    res.json({ message: "Paciente eliminado" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createPaciente,
  getPacientes,
  getPacienteById,
  updatePaciente,
  deletePaciente,
};
