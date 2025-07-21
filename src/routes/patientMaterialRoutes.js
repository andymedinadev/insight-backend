const express = require("express");
const patientMaterialController = require("../controllers/patientMaterialController");

const router = express.Router({ mergeParams: true });

router.post("/", patientMaterialController.createMaterial);
router.get("/", patientMaterialController.getMaterials);
router.get("/:materialId", patientMaterialController.getMaterialById);
router.put("/:materialId", patientMaterialController.updateMaterial);
router.delete("/:materialId", patientMaterialController.deleteMaterial);

module.exports = router;
