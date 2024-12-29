import { Router } from "express";

const router = Router();

/** Autenticación y Registro */
router.post("/auth/register", (req, res) => {
  console.log(req.body);
  let { name, surname, age } = req.body;
  let newUser = { name, surname, age };
  res.send(newUser);
});

// Routing
router.get("/", (req, res) => {
  res.send("Hola Mundo en Express / Typescript");
});

router.get("/nosotros", (req, res) => {
  res.send("Hola nosotros");
});

router.get("/blog", (req, res) => {
  res.send("Hola blog");
});

export default router;
