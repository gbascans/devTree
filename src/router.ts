import { Router } from "express";
import { createAccount, getAllUsers } from "./handlers";

const router = Router();

/** Autenticación y Registro */
router.post("/auth/register", createAccount);

// Routing
router.get("/getUsers", getAllUsers);

export default router;
