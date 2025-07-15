const express = require("express");
const pacienteController = require("../controllers/pacienteController");

const router = express.Router();

router.post("/", pacienteController.createPaciente);
router.get("/", pacienteController.getPacientes);
router.get("/:id", pacienteController.getPacienteById);
router.put("/:id", pacienteController.updatePaciente);
router.delete("/:id", pacienteController.deletePaciente);

module.exports = router;
