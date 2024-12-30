import User from "../models/User";

export const createAccount = async (req, res) => {
  let { name, email, password } = req.body;
  const user = new User({ name, email, password });
  try {
    await user.save();
    res.json("Usuario Agregado Correctamente");
  } catch (error) {
    res.json({ error: error.errorResponse.errmsg });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch {
    res.json({ error: "No users found" });
  }
};
