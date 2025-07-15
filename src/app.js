const express = require("express");
const cors = require("cors");

require("dotenv").config();

const usuarioRoutes = require("./routes/usuarioRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/usuarios", usuarioRoutes);

module.exports = app;
