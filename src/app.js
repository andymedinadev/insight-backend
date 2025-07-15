const express = require("express");
const cors = require("cors");

require("dotenv").config();

const usuarioRoutes = require("./routes/usuarioRoutes");
const pacienteRoutes = require("./routes/pacienteRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/usuarios", usuarioRoutes);
app.use("/api/pacientes", pacienteRoutes);

module.exports = app;
