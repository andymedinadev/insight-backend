const express = require("express");
const usuarioController = require("../controllers/usuarioController");

const router = express.Router();

router.get("/", usuarioController.getUsuarios);
router.post("/", usuarioController.createUsuario);

module.exports = router;
