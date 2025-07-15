const express = require("express");
const controller = require("../controllers/patientMaterialController");

const router = express.Router({ mergeParams: true });

router.post("/", controller.createMaterial);
router.get("/", controller.getMaterials);
router.get("/:materialId", controller.getMaterialById);
router.put("/:materialId", controller.updateMaterial);
router.delete("/:materialId", controller.deleteMaterial);

module.exports = router;
