const express = require("express");
const router = express.Router();
const usuarios = require("./usuarios");

router.use("/usuarios", usuarios);

module.exports = router;
