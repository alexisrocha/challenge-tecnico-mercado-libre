const express = require("express");
const router = express.Router();
const objeto = require("../controllers/usuarios");

router.get("/", objeto.findAll);
router.post("/", objeto.createOne);
router.put("/:id", objeto.editOne);
router.delete("/:id", objeto.deleteOne);

module.exports = router;
