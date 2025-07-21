const mongoose = require("mongoose");

const patientNoteSchema = new mongoose.Schema({
  patientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Patient",
    required: true,
  },
  title: { type: String, required: true, maxlength: 200 },
  content: { type: String },
  creationDate: { type: Date, default: Date.now },
  actualizationDate: { type: Date },
});

module.exports = mongoose.model("PatientNote", patientNoteSchema);
