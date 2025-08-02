const express = require("express");
const patientController = require("../controllers/patientController");

const router = express.Router();

router.post("/", patientController.createPatient);
router.get("/", patientController.getPatients);
router.get("/:patientId", patientController.getPatientById);
router.put("/:patientId", patientController.updatePatient);
router.delete("/:patientId", patientController.deletePatient);

module.exports = router;
