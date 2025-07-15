const express = require("express");
const cors = require("cors");

require("dotenv").config();

const usuarioRoutes = require("./routes/usuarioRoutes");
const pacienteRoutes = require("./routes/pacienteRoutes");
const patientNoteRoutes = require("./routes/patientNoteRoutes");
const patientMaterialRoutes = require("./routes/patientMaterialRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/usuarios", usuarioRoutes);
app.use("/api/pacientes", pacienteRoutes);
app.use("/api/pacientes/:pacienteId/notas", patientNoteRoutes);
app.use("/api/pacientes/:pacienteId/materiales", patientMaterialRoutes);

module.exports = app;
