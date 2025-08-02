const mongoose = require("mongoose");

const patientNoteSchema = new mongoose.Schema({
  noteId: {
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

patientNoteSchema.index({ patientId: 1, noteId: 1 }, { unique: true });

module.exports = mongoose.model("PatientNote", patientNoteSchema);
