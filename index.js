//const express = require("express");
import express from "express"; //cambiamos a notacion ESM

const app = express();

// Routing
app.get("/", (req, res) => {
  res.send("Hola Mundo");
});

app.get("/ecommerce", (req, res) => {
  res.send("Hola ecommerce");
});

app.get("/blog", (req, res) => {
  res.send("Hola blog");
});

app.get("/nosotros", (req, res) => {
  res.send("Hola Nosotros");
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log("Servidor Funcionando en el puerto:", port);
});
