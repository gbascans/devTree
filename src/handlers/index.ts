import { Request, Response } from "express";
import slug from "slug";
import User from "../models/User";
import { checkPassword, hashPassword } from "../utils/auth";
import { generateJWT } from "../utils/jwt";

//Register
export const createAccount = async (req: Request, res: Response) => {
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

//Login
export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  //revisar si está registrado
  const user = await User.findOne({ email });
  if (!user) {
    const error = new Error("El usuario o la contraseña son incorrectos");
    res.status(409).json({ error: error.message });
    return;
  }

  //verificar que la password sea correcta
  const verifiedPassword = await checkPassword(password, user.password);
  if (!verifiedPassword) {
    const error = new Error("El usuario o la contraseña son incorrectos");
    res.status(401).json({ error: error.message });
    return;
  }
  const token = generateJWT({ id: user._id });
  res.send(token);
};

//get all users
export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch {
    res.json({ error: "No users found" });
  }
};
