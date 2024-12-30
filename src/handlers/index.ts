import { Request, Response } from "express";
import User from "../models/User";
import { hashPassword } from "../utils/auth";

export const createAccount = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400).json({ error: "El usuario ya está registrado" });
    return;
  }
  const hashedPassword = await hashPassword(password);
  const user = new User({ name, email, password: hashedPassword });
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
