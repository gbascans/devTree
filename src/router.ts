import { Router } from "express";
import { body } from "express-validator";
import { createAccount, getAllUsers } from "./handlers";

const router = Router();

/** Autenticación y Registro */
router.post(
  "/auth/register",
  body("handle").notEmpty().withMessage("El Handle no puede ir vacio"),
  createAccount
);

// Routing
router.get("/getUsers", getAllUsers);

export default router;
