const express = require("express");
const router = express.Router();

router.get("/ruta1", (req, res) => {
    res.send("Nombre: Santiago");
});

router.get("/ruta2", (req, res) => {
    res.send("Apellido: Rinaldi");
});

router.get("/ruta3", (req, res) => {
    res.send("Telefono: 3537554351");
});

module.exports = router;