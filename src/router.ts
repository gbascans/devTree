import { Router } from "express";
import { body } from "express-validator";
import { createAccount, getAllUsers } from "./handlers";

const router = Router();

/** Autenticación y Registro */
router.post(
  "/auth/register",
  body("handle").notEmpty().withMessage("El Handle no puede ir vacio"),
  body("email").isEmail().withMessage("email no valido"),
  body("name").notEmpty().withMessage("El name no puede ir vacio"),
  body("password")
    .isLength({ min: 8 })
    .withMessage("El password debe tener minimo 8 caracteres"),
  createAccount
);

// Routing
router.get("/getUsers", getAllUsers);

export default router;
