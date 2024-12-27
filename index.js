const express = require("express");

const app = express();

// Routing

app.get("/", (req, res) => {
  res.send("Hola Mundo");
});

app.listen(4000, () => {
  console.log("Servidor Funcionando...");
});
