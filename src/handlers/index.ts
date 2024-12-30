import { Request, Response } from "express";
import User from "../models/User";

export const createAccount = async (req: Request, res) => {
  let { name, email, password } = req.body;
  const userExists = await User.findOne({ email });
  if (userExists) {
    return res.status(400).json({ error: "El usuario ya está registrado" });
  }
  const user = new User({ name, email, password });
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
