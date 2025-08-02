const mongoose = require("mongoose");

const patientMaterialSchema = new mongoose.Schema({
  materialId: {
    type: Number,
    unique: true,
  },
  patientId: {
    type: Number,
    required: true,
  },
  title: { type: String, required: true, maxlength: 200 },
  content: { type: String },
  creationDate: { type: Date, default: Date.now },
  actualizationDate: { type: Date },
});

patientMaterialSchema.index({ patientId: 1, materialId: 1 }, { unique: true });

module.exports = mongoose.model("PatientMaterial", patientMaterialSchema);
