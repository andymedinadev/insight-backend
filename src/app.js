const express = require("express");
const cors = require("cors");

const userRoutes = require("./routes/userRoutes");
const patientRoutes = require("./routes/patientRoutes");
const patientNoteRoutes = require("./routes/patientNoteRoutes");
const patientMaterialRoutes = require("./routes/patientMaterialRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/patients", patientRoutes);
app.use("/api/patients/:patientId/notes", patientNoteRoutes);
app.use("/api/patients/:patientId/materials", patientMaterialRoutes);

module.exports = app;
