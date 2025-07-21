const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50,
    trim: true,
  },
  surname: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50,
    trim: true,
  },
  birthdate: {
    type: Date,
    required: true,
  },
  nationality: {
    type: String,
    required: true,
    minlength: 4,
    maxlength: 30,
  },
  typeOfIdentification: {
    type: String,
    required: true,
    maxlength: 50,
  },
  identification: {
    type: String,
    required: true,
    minlength: 9,
    maxlength: 20,
  },
  sex: {
    type: String,
    enum: ["Masculino", "Femenino", "Otro"],
    required: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  phone: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 20,
  },
  admissionDate: {
    type: Date,
    default: Date.now,
  },
  age: Number,
  ageRange: String,
  isEnabled: {
    type: Boolean,
    default: true,
  },

  principalMotive: String,
  actualSymptoms: String,
  recentEvents: String,
  previousDiagnosis: String,
  profesionalObservations: String,
  keyWords: String,
  failedActs: String,
  interconsultation: String,
  patientEvolution: String,
  sessionDay: String,
  modality: {
    type: String,
    enum: ["Presencial", "Virtual"],
  },
  sessionDuration: Number,
  sessionFrequency: String,
  preferedContact: String,

  notes: [{ type: mongoose.Schema.Types.ObjectId, ref: "PatientNote" }],
  materials: [{ type: mongoose.Schema.Types.ObjectId, ref: "PatientMaterial" }],
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Patient", patientSchema);
