const mongoose = require("mongoose");
const Counter = require("./Counter");

const patientSchema = new mongoose.Schema({
  shortId: {
    type: Number,
    unique: true,
  },
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

patientSchema.pre("save", async function (next) {
  if (this.isNew) {
    const counter = await Counter.findOneAndUpdate(
      { _id: "patientShortId" },
      { $inc: { sequenceValue: 1 } },
      { new: true, upsert: true }
    );
    this.shortId = counter.sequenceValue;
  }
  next();
});

module.exports = mongoose.model("Patient", patientSchema);
