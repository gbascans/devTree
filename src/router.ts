import { Router } from "express";

const router = Router();

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
