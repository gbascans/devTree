import bcrypt from "bcrypt";

//hashear el password
export const hashPassword = async (password: string) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

//comprobar el password
export const checkPassword = async (enteredPassword: string, hash: string) => {
  const result = await bcrypt.compare(enteredPassword, hash);
  return result;
};
