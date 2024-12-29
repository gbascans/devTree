import express from "express"; //cambiamos a notacion ESM
const app = express();

// Routing
app.get("/", (req, res) => {
  res.send("Hola Mundo en Express / Typescript");
});

export default app;
