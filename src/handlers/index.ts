import { Request, Response } from "express";
import { validationResult } from "express-validator";
import slug from "slug";
import User from "../models/User";
import { hashPassword } from "../utils/auth";

export const createAccount = async (req: Request, res: Response) => {
  // Manejar errores
  let errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array()[0].msg });
    return;
  }

  const { handle, name, email, password } = req.body;
  //comprobar email
  const emailExist = await User.findOne({ email });
  if (emailExist) {
    const error = new Error("El correo se encuentra registrado");
    res.status(409).json({ error: error.message });
    return;
  }
  //comprobar handle
  const newHandle = slug(handle, "");
  const handleExist = await User.findOne({ handle: newHandle });
  if (handleExist) {
    const error = new Error("El usuario se encuentra registrado");
    res.status(409).json({ error: error.message });
    return;
  }
  const hashedPassword = await hashPassword(password);
  const user = new User({
    handle: newHandle,
    name,
    email,
    password: hashedPassword,
  });
  try {
    await user.save();
    res.json("Usuario Agregado Correctamente");
  } catch (error) {
    res.json({ error: error.errorResponse.errmsg });
  }
};

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch {
    res.json({ error: "No users found" });
  }
};
