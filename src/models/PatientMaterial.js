const mongoose = require("mongoose");

const patientMaterialSchema = new mongoose.Schema({
  patientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Paciente",
    required: true,
  },
  title: { type: String, required: true, maxlength: 200 },
  content: { type: String },
  creationDate: { type: Date, default: Date.now },
  actualizationDate: { type: Date },
});

module.exports = mongoose.model("PatientMaterial", patientMaterialSchema);
