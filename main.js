const express = require("express");
const app = express();
const port = 3000;
const indexRouter = require("./routes/index")

app.use("/santi", indexRouter);

app.listen(port, () => {
    console.log(`Servidor escuchando en puerto ${port}`);
});
