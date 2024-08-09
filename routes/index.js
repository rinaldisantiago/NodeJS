const express = require("express");
const router = express.Router();

router.get("/mensaje", (req, res) => {
    res.send("Hola mundo 2.0!");
});

router.get("/message", (req, res) => {
    res.send("Hola mundo 3.0!");
});

router.get("/api", (req, res) => {
    res.send("Hola mundo 4.0!");
});

module.exports = router;