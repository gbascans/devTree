import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const url =
      "mongodb+srv://root:txmyg9t13gcW7AbU@cluster0.rtb1m.mongodb.net/linktree_node_typescript";
    const { connection } = await mongoose.connect(url);
    const url2 = `${connection.host}:${connection.port}`;

    console.log(`MongoDB Conectado en ${url2}`);
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};
